var express = require('express');
var router = express.Router();
let kubectl_router = require('./kubecontroller/router')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express112' });
});
router.use('/v1',kubectl_router)
module.exports = router;
