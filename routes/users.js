var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).json({fullname:"Jiraporn"})
});

router.get('/bio', function(req, res, next) {
  res.status(200).json({
    fullname:"Jiraporn Tubchum",
  nickname:"may",
nobby:"readbook",
gitusername:"shironinjin"})
});

module.exports = router;
