var mongoose = require ('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/sonics');

var db = mongoose.connection;


db.on('error', () => {
  console.log('mongoose connection error');
})

db.once('open', () => {
  console.log('mongoose connection success');
})

var cardSchema = mongoose.Schema({
  id: Number,
  name: String,
  rarity: String,
  html_url: String
});

var Card = mongoose.model('Card', cardSchema);

const cardPull = (callback) => {
  // Card.find({}, (err, sonics) => {
  //   if (err) {
  //     callback(err, null);
  //   } else {
  //     console.log('in cardPull', sonics)
  //     callback(null, sonics);
  //   }
  // })
  Card.find({})
    .exec((err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        callback(null, data);
      }
    })
};

module.exports.cardPull = cardPull;