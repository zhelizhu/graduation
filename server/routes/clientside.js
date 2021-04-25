var express = require('express');

var router = express.Router();

let { banner } = require('../controller/clientside/controller')

router.get('/banner', banner)

module.exports = router;
