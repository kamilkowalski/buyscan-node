var fs = require("fs"),
    path = require("path"),
    Promise = require("promise");

var Parser = function (filename, resolve, reject) {
  this.filename = filename;
  this.resolve  = resolve;
  this.reject   = reject;
};

Parser.prototype.parse = function () {
  var base = path.resolve();
  var file = path.join(base, "/recognitions/" + this.filename + ".txt");

  fs.readFile(file, "utf8", this.parseString.bind(this));
};

Parser.prototype.parseString = function (err, result) {
  if (err) throw err;
  this.resolve(result.split("\n"));
};

exports.parse = function (filename) {
  return new Promise(function (resolve, reject) {
    var parser = new Parser(filename, resolve, reject);
    parser.parse();
  });
};
