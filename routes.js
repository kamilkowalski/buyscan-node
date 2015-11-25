var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
var recognition = require("./handlers/recognition");

exports.setupRoutes = function (app) {

  app.get('/', function (req, res) {
    res.send('Hello World!');
  });

  app.get('/test', recognition.test);
  app.post('/recognize', upload.single('receipt'), recognition.recognize);

};
