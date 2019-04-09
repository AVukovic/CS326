const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(express.static('static'));
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;

// NEW
//
// We can get rid of the in-memory data model now!
//
// const issues = [
//   {
//     id: 1,
//     status: "Open",
//     owner: "Ravan",
//     created: new Date("2016-08-15"),
//     effort: 5,
//     completionDate: undefined,
//     title: "Error in console when clicking Add"
//   },
//   {
//     id: 2,
//     status: "Assigned",
//     owner: "Eddie",
//     created: new Date("2016-08-15"),
//     effort: 14,
//     completionDate: new Date("2016-08-30"),
//     title: "Missing bottom border on panel"
//   }
// ];

const validIssueStatus = {
  New: true,
  Open: true,
  Assigned: true,
  Fixed: true,
  Verified: true,
  Closed: true,
};

const issueFieldType = {
  // NEW - we can remove the required field for validation as mongo
  //       is required to create an _id for each new object.
  // id: 'required',
  status: 'required',
  owner: 'required',
  effort: 'optional',
  created: 'required',
  completionDate: 'optional',
  title: 'required',
};

function validateIssue(issue) {
  for (const field in issueFieldType) {
    const type = issueFieldType[field];
    if (!type) {
      delete issue[field];
    } else if (type === 'required' && !issue[field]) {
      return `${field} is required.`;
    }
  }
  if (!validIssueStatus[issue.status])
    return `${issue.status} is not a valid status.`;
  return null;
}

app.get('/api/issues', (req, res) => {
  db.collection('issues').find().toArray().then(issues => {
    const metadata = { total_count: issues.length };
    res.json({ _metadata: metadata, records: issues })
  }).catch(error => {
    console.log(error);
    res.status(500).json({ message: `Internal Server Error: ${error}` });
  });
});

// NEW
//
// 
//
app.post('/api/issues', (req, res) => {
  const newIssue = req.body;
  // NEW - remove this, we now have the object ID from mongo!
  // newIssue.id = issues.length + 1;
  newIssue.created = new Date();
  if (!newIssue.status)
    newIssue.status = 'New';

  const err = validateIssue(newIssue);
  if (err) {
    res.status(422).json({ message: `Invalid request: ${err}` });
    return;
  }

  // NEW - we no longer need to add the new issue to the in-memory database,
  //       so we can get rid of that!
  // issues.push(newIssue);
  // res.json(newIssue);

  // NEW - add the call to database to insert a new issue to the issues
  //       collection! Super cool!
  db.collection('issues').insertOne(newIssue).then(result =>
    // This may be a little obscure, but we need to lookup the newly created
    // issue to get the issue. The "result", is simply the return value from
    // MongoDB that gives us the ID of the data that was inserted.
    db.collection('issues').find({ _id: result.insertedId }).limit(1).next()
  ).then(newIssue => {
    res.json(newIssue);
  }).catch(error => {
    console.log(error);
    res.status(500).json({ message: `Internal Server Error: ${error}` });
  });
});

let db;
MongoClient.connect('mongodb://localhost', { useNewUrlParser: true }).then(connection => {
  db = connection.db('issuetracker');
  app.listen(3000, () => {
    console.log('App started on port 3000');
  });
}).catch(error => {
  console.log('ERROR:', error);
});
