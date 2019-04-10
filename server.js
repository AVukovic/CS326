const express = require('express');
const bodyParser = require('body-parser');
//const MongoClient = require('mongodb').MongoClient;
const app = express();

app.use(express.static('static'));
app.use(bodyParser.json());


app.post('/post', (request, response) => { const orgMsg = request.body; response.json(orgMsg); });
app.get('/get', (req, res) => {
  db.collection('messages').find().toArray().then((val, err) => {
    res.json({ messages: val });
  }).catch(error => {
    console.log(error);
    res.status(500).json({ message: `Internal Server Error: ${error}` });
  });
});

let db;
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost', { useNewUrlParser: true }).then(connection => {
  db = connection.db('database');
  app.listen(3000, () => {
    console.log('App started on port 3000');
  });
}).catch(error => {
  console.log('ERROR:', error);
});
