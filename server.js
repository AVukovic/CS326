const express = require('express');
const bodyParser = require('body-parser');
//const MongoClient = require('mongodb').MongoClient;
const app = express();

app.use(express.static('static'));
app.use(bodyParser.json());


app.post('/post', (req, res) => {
  const entry = req.body;
  const err = validateIssue(newIssue);
  if (err) {
    res.status(422).json({ message: `Invalid request: ${err}` });
    return;
  }
  db.collection('messages').insert(entry).then(result =>
    db.collection('messages').find({ id: result.id }).limit(1).next()).then(newIssue => {
      res.json(newIssue);}).catch(error => {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error: ${error}` });
  });
});

app.get('/get', (req, res) => {
  datab.collection('messages').find().toArray().then((val, err) => {
    res.json({ entries: val });
  }).catch(error => {
    console.log(error);
    res.status(500).json({ message: `Internal Server Error: ${error}` });
  });
});

let datab;
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost', { useNewUrlParser: true }).then(connection => {
  datab = connection.db('Euler');
  app.listen(3000, () => {
    console.log('App started on port 3000');
  });
}).catch(error => {
  console.log('ERROR:', error);
});
