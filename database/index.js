//Import the mongoose module
var mongoose = require ('mongoose');
//Set up default mongoose connection
  // 'mongodb://127.0.0.1/my_database'
mongoose.connect('mongodb://127.0.0.1:27017/sonics');

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

//Get the default connection
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

  //db instance      //collection, schema
var Card = mongoose.model('cards', cardSchema);

//Card creation function://
//
// Card.create({id: 1, name: 'dfd', rarity: 'dfd', html_url: 'adfd'}, (err, doc) => {
//   if(err) {
//     console.log(err); 
//   }
//   else {
//     console.log('created');
//   }
// })

const cardPull = (callback) => {
  Card.find({}, (err, sonics) => {
    if (err) {
      callback(err, null);
    } else {
      console.log('in cardPull', sonics)
      callback(null, sonics);
    }
  }).limit(10)

  //2ndoption
  // Card.find({})
  //   .exec((err, data) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       console.log('data:', data);
  //       callback(null, data);
  //     }
  //   })
};

module.exports.cardPull = cardPull;
module.exports.Card = Card;