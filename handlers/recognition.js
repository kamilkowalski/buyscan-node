var exec = require('child_process').exec;
var path = require('path');

exports.recognize = function (req, res) {
  console.log("Received receipt: %s", req.file.originalname);

  var base      = path.resolve();
  var input     = path.join(base, '/uploads/', req.file.filename);
  var output    = path.join(base, '/recognitions/', req.file.filename);
  var tessdata  = path.join(base, "/tessdata");

  var cmd = "tesseract " + input + " " + output +
    " --tessdata-dir " + tessdata + " -l pol";

  exec(cmd, function (error, stdout, stderr) {
    console.log("Recognition complete!");
    console.log("Errors: %s", error);
    console.log("Stdout: %s", stdout);
    console.log("Stderr: %s", stderr);
  });
};

exports.test = function (req, res) {
  res.render('test');
};
