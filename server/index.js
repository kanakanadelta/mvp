const express = require('express');
const Parser = require('body-parser');
const db = require('../database/index.js');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(Parser.urlencoded({ extended: false }));

//app.get
//summon and collection
app.get('/summon', function (req, res) {
  db.cardPull(function(err, sonics) {
    if (err) {
      res.sendStatus(500);
    } else {
      console.log('Sonic OC summon!')
      console.log(sonics)
      res.json(sonics);
    }
  });
});

let port = 9000;

app.listen(port, function() {
  console.log(`\n it's over (port) ${port}!`);
});