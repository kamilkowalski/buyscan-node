var path = require("path");

exports.boxify = function(filename) {
  var base = path.resolve();
  var file = path.join(base, "/recognitions/" + filename + ".box");

  return new Promise(function (resolve, reject) {
    resolve([
      { text: "a", x: 5, y: 5, width: 10, height: 15 }
    ]);
  });
};
