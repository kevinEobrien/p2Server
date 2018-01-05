const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const resources = require("./data/artResources");

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) =>
  res.json(resources));
//   res.json();
// });
// app.post("/", (req, res) => {
//   data.push(req);
// });

app.listen(process.env.PORT || 3000, () => console.log("It workies"));
