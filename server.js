const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();

app.use(express.static('static'));
app.use(bodyParser.json());


app.post('/', (request, response) => { const orgMsg = request.body; response.json(msg); });
app.get('/', (request, response) => {
    const key = request.body;
    response.json(db.collection.findOne({id: key.id}));
});

let db;
MongoClient.connect('mongodb://localhost', { useNewUrlParser: true }).then(connection => {
  db = connection.db('EulerOnCanvas');
  app.listen(3000, () => {
    console.log('App started on port 3000');
  });
}).catch(error => {
  console.log('ERROR:', error);
});
