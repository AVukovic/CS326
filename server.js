const express = require('express');
const bodyParser = require('body-parser');
//const MongoClient = require('mongodb').MongoClient;
const app = express();

app.use(express.static('static'));
app.use(bodyParser.json());


app.post('/post', (req, res) => {
  const entry = req.body;
  //if (err) {
  //  res.status(422).json({ message: `Invalid request: ${err}` });
  //  return;
  //}
  datab.collection('messages').insertOne(entry).then(result =>
    datab.collection('messages').find({ _id: result._id}).limit(1).next()).then(newIssue => {
      res.json(newIssue);}).catch(error => {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error: ${error}` });
  });
});

app.get('/get/:msg', (req, res) => {
  //console.log(req.params.msg);
  datab.collection('messages').find({ _id: req.params.msg}).toArray().then((val, err) => {
    //console.log(val[0]);
    res.send(val[0])
  }).catch(err => {
    console.log(err);
    res.status(500).json({ message: `Internal Server Error: ${err}` });
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
