var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get("/connexion", function (req, res, next) {
  res.send("respond with a resource");
});


const User = require("../models/users");
const { checkBody } = require("../modules/checkBody");

router.post("/signup", (req, res) => {
  if (!checkBody(req.body, ["name", "firstname", "email", "password"])) {
    res.json({ result: false, error: "Missing or empty fields" });
    return;
  }

  // Check if the user has not already been registered
  User.findOne({ email: req.body.email }).then((data) => {
    if (data === null) {
      const newUser = new User({
        name: req.body.name,
        firstName: req.body.firstName,
        email: req.body.email,
        password: req.body.password,
      });

      newUser.save().then(() => {
        res.json({ result: true });
      });
    } else {
      // User already exists in database
      res.json({ result: false, error: "User already exists" });
    }
  });
});

router.post("/signin", (req, res) => {
  if (!checkBody(req.body, ["email", "password"])) {
    res.json({ result: false, error: "Missing or empty fields" });
    return;
  }

  User.findOne({ email: req.body.email, password: req.body.password }).then(
    (data) => {
      if (data) {
        res.json({ result: true });
      } else {
        res.json({ result: false, error: "User not found" });
      }
    }
  );
});






module.exports = router;
