//setting up setup variables

const express = require("express");
const filter = require("./routes/filter");

const app = express();
const PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//all routes that start with /urls get handled here

// app.use("/", home);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
