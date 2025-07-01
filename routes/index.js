var express = require("express");
var router = express.Router();

const data = require("../models/connection"); //import, initialisation connection
const Trip = require("../models/trips"); //import du modèle
// autant que de models/schemas

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

function AllData() {
  data.find().then((data) => {
    console.log(data);
  });
}

AllData();

// router.get('/trip', (req, res) {
//   data.find().then(data => { console.log(data);});

//  })
// ;

// const newTrip = new Trip({
//   //utilisation du modèle
//   departure: String,
//   arrival: String,
//   date: Date,
//   price: Number,
// });

// newTrip.save().then((newDoc) => {
//   // exploitation du document créé
//   console.log(newDoc);
// });

module.exports = router;
