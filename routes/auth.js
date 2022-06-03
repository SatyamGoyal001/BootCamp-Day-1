var express = require("express");
var router = express.Router();

router.get("/login", function(req, res, next) {
  res.render("auth", {user: "Satyam", password: "ThisIsPassword"});
});

module.exports = router;