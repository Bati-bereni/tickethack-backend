var express = require("express");
var router = express.Router();

require("../models/connection"); //import, initialisation connection
const Trip = require("../models/trips"); //import du modèle
const Cart = require("../models/carts");
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
  const formatDepCity =
    req.body.departure[0].toUpperCase() +
    req.body.departure.slice(1).toLowerCase();
  const formatArrCity =
    req.body.arrival[0].toUpperCase() + req.body.arrival.slice(1).toLowerCase();

  Trip.find({ departure: formatDepCity, arrival: formatArrCity }).then(
    (data) => {
      res.json({ allTrips: data });
    }
  );
});

router.post("/addToCart", (req, res) => {
  // Récupérer la donnée intéréssante
  console.log(req.body);

  Trip.find({
    departure: req.body.departure,
    arrival: req.body.arrival,
    date: new Date(req.body.date),
    price: req.body.price,
  }).then((data) => {
    const NewCart = new Cart({
      departure: req.body.departure,
      arrival: req.body.arrival,
      date: req.body.date,
      price: req.body.price,
    });

    NewCart.save().then(() => {
      Cart.find().then((data) => {
        console.log("My new dataCart =>", data);
        res.json({ result: true, message: "New cart properly saved" });
      });
    });

    console.log("Mon Cart =>", NewCart);
  });
  // Chercher en base de donnée Trip, l'élément correspondant

  // Enregistrer ce document trouvé, dans la collection Cart

  // Renvoyer une réponse adéquat
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
