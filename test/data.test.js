
const assert = require("chai").assert;
const app = require("../app.js");

describe("checks to see if merged data function works", () => {
  describe("#mergedData", function (){
    it("puts together data from two separarte databases", function (){
      var data = [{
        id: 1,
        type: "video",
        description: "nice video"
      }];
      var otherData = [{
        id: 1,
        link: "video.com"
      }];
      assert.deepEqual(app.mergedData(data, otherData), [{
        id: 1,
        type: "video",
        description: "nice video",
        link: "video.com"
      }]);
    });
  });
});