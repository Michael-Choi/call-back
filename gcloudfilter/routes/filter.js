const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const classifyText = require("../helpers/classifyText");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

//we receive information through a post request to localhost:8000/rawdata then we run the google classification function on each input decide if its relevant and make a post request to the genesys api
router.post("/rawdata", async (req, res) => {
  let arr = [];
  try {
    for (let qna of req.body) {
      let category = await classifyText(qna.faq.question, qna.faq.answer)[0];
      // console.log("Question: ", qna.faq.question);
      // console.log("Answer: ", qna.faq.answer);
      // console.log(category);
      await arr.push([category.name, category.confidence]);
    }
    res.sendStatus(200);
  } catch {
    res.sendStatus(200);
  }
});

module.exports = router;
