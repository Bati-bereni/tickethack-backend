var express = require("express");
var router = express.Router();

require("../models/connection"); //import, initialisation connection
const Trip = require("../models/trips"); //import du modèle
// autant que de models/schemas

//GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/getAllTrips", (req, res) => {
  Trip.find().then((data) => {
    res.json({ allTrips: data });
  });
});

router.post("/tripSearch", (req, res) => {
  if (!req.body.departure || !req.body.arrival) {
    res.json({ result: false, error: "Missing or empty field" });
  }

  const formatDepCity =
    req.body.departure[0].toUpperCase() +
    req.body.departure.slice(1).toLowerCase();
  const formatArrCity =
    req.body.arrival[0].toUpperCase() + req.body.arrival.slice(1).toLowerCase();

  Trip.find({ departure: formatDepCity, arrival: formatArrCity }).then(
    (data) => {
      res.json({ result: true, allTrips: data });
    }
  );
});

// router.post("/getOneTrip", (req, res) => {
//   // console.log("body dans le back =>", req.body.depart);

//   Trip.findOne({ departure: req.body.depart, arrival: req.body.arrivee })
//   .then((data) => {
//       res.json({ theTrip: data });
//     }
//   );
// });

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

// router.post("/nom", (req, res) => {
//   const reformatageNom = req.body.nom[0].toUpperCase() + req.body.nom.slice(1).toLowerCase();
//   const reformatagePrenom = req.body.prenom[0].toUpperCase() + req.body.prenom.slice(1).toLowerCase();

// res.json({ name: reformatageNom, firstName: reformatagePrenom });

// const city = weather.find(

//   (elem) => elem.cityName.toLowerCase() === req.params.cityName.toLowerCase()
// );
//console.log(city);

//   if (city === undefined) {
//     res.json({ result: false, error: "City not found" });
//   } else {
//     res.json({ result: true, weather: city });
//   }
//});

module.exports = router;
