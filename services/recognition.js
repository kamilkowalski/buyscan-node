var exec = require("child_process").exec,
    path = require("path"),
    parser = require("./parser"),
    boxer = require("./boxer"),
    Promise = require("promise");

exports.recognize = function (req, res) {
  var base      = path.resolve();
  var filename  = req.file.filename;
  var input     = path.join(base, "/uploads/", filename);
  var output    = path.join(base, "/recognitions/", filename);
  var tessdata  = path.join(base, "/tessdata");
  var makebox   = path.join(base, "/tessconf/makebox");

  var cmd = "tesseract " + input + " " + output +
    " --tessdata-dir " + tessdata + " -l pol" +
    " " + makebox;

  exec(cmd, function (error, stdout, stderr) {
    if (error) throw error;
    Promise.all([
      parser.parse(filename),
      boxer.boxify(filename)
    ]).then(function (res) {
      console.log("All promises finished");
      console.log(res);
    });
  });

  res.json({
    id: filename
  });
};

exports.test = function (req, res) {
  res.render("test");
};
