const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

router.post("/rawdata", (req, res) => {
  let question = req.body.question;
  let answer = req.body.answer;
});

module.exports = router;
