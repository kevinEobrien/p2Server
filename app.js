// import { log } from "util";


const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const resources = require("./data/artResources");

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => res.json(resources));

let suggestions = [];


app.post("/suggestions", function(request, response) {
  suggestions.push(response.body);
  console.log(response.body);
  response.json({ "Your suggestions is greatly appreciated.": request.body });
});

app.get("/suggestions", (req, res) => res.json(suggestions));

app.listen(process.env.PORT || 3000);

// module.exports {

// }