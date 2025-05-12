var express = require('express');
var router = express.Router();
let KubectlService = require('../../model/system/kubectl_service')
/* GET home page. */
router.get('/kube_ctl', function(req, res, next) {
  res.render('index', { title: (new KubectlService()).name() });
});

module.exports = router;
