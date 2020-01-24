const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");

const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/estudiantes", (req, res) => {
  const event = require("./db.json").ubicaciones;
  res.send(event);
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
