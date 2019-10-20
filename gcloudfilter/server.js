//setting up setup variables

const express = require("express");
const filter = require("./routes/filter");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: true }));

//all routes that start with /urls get handled here

app.use("/", filter);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
