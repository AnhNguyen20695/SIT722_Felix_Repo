var express = require('express');
var router = express.Router();
const unittitles = [
  {'unittitle':'unit 1'},
  {'unittitle':'unit 2'},
  {'unittitle':'unit 3'}
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'this class' , page_title: 'SIT722', list: unittitles});
});

module.exports = router;
