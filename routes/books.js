var express = require("express");
var router = express.Router();

router.get('/add', function(req, res, next) {
  res.render('books');
});

router.post("/add", function(req, res, next) {
  console.info(req.body);
  res.status(200).json({message: "Book Saved Successfuly!!"});
  
});

router.get("/find/:id", function(req, res, next) {
  const {id} = req.params;
  console.info(id);
  res.status(200).json({message: "Book Found!!"});
});

module.exports = router;