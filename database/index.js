var mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var db = mongoose.connection;


db.on('error', () => {
  console.log('mongoose connection error');
})
