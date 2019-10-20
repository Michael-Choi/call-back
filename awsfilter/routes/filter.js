const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const classifyText = require("../helpers/classifyText");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

//we receive information through a post request to localhost:8000/rawdata then we run the google classification function on each input decide if its relevant and make a post request to the genesys api
router.post("/rawdata", (req, res) => {
  for (let qna of req.body) {
    let category = classifyText(qna.question + qna.answer);
    console.log(category);
  }
});

module.exports = router;
