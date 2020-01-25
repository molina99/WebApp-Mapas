const express = require("express");
const app = express();

const router = express.Router();

const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/estudiantes", (req, res) => {
  const event = require("./db.json").ubicaciones;
  // res.send(event);
  res.json(event)
});

router.route('/estudiantes')
.get((req, res)=>{
  Mapas.find((err, mapas)=>{
    if(err){
      return res.send(err);
    }
    return res.json(mapas)
  });
})


app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
