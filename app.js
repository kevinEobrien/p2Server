const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const resources = require("./data/artResources");
const resourcesLink = require("./data/data");

app.use(cors());
app.use(bodyParser.json());

app.get("/resources", (req, res) => res.json(resources));
app.get("/resourcesLink", (req, res) => res.json(resourcesLink));

let suggestions = [];

function mergedData(data, otherData) {
  let mergedData = [];
  data.forEach(function (resource){
    for(var i=0, length= otherData.length; i<length; i++){
      if(resource.id===otherData[i].id){
        var completeResource= {"id": resource.id, "type": resource.type, "description":resource.description, "link":otherData[i].link}
        mergedData.push(completeResource); 
      }
    }
  });
  return mergedData;
}

let mergedArray = mergedData(resources.data, resourcesLink.link);

app.get("/", (req, res) => res.json(mergedArray));

app.post("/suggestions", function(request, response) {
  suggestions.push(request.body);
  response.json({ "Your suggestion is greatly appreciated.": request.body });
});

app.get("/suggestions", (req, res) => res.json(suggestions));

app.listen(process.env.PORT || 3000);

module.exports = {
  mergedData
};