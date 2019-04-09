const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
app.use(bodyParser.json());


const app = express();

app.use(express.static('static'));
app.use(bodyParser.json());

app.listen(3000, function () {
    console.log('App started on port 3000');
});