var express = require("express");
var router = express.Router();

require("../models/connection"); //import, initialisation connection
const Trip = require("../models/trips"); //import du modèle
// autant que de models/schemas

// /* GET home page. */
// // router.get('/', function(req, res, next) {
// //   res.render('index', { title: 'Express' });
// // });

// function getAllTrips() {
//   Trip.find().then((data) => {
//     console.log(data);
//   });
// }

// router.get("/getAllTrips", (req, res) => {
//   Trip.find().then((data) => {
//     res.json({ allTrips: data });
//   });
// });

// router.post("/getOneTrip", (req, res) => {
//   // console.log("body dans le back =>", req.body.depart);

//   Trip.findOne({ departure: req.body.depart, arrival: req.body.arrivee })
//   .then((data) => {
//       res.json({ theTrip: data });
//     }
//   );
// });


// router.get("/maRoute", (req, res) => {

//   res.json({message : "je suis dans ma route"})

// })












// getAllTrips();

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

//-------------------------------//











module.exports = router;
