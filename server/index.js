const express = require('express');
const Parser = require('body-parser');
const db = require('../database/index.js');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

//app.get
//summon and collection

let port = 9000;

app.listen(port, function() {
  console.log(`listening on port: ${port}!`);
});