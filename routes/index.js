var express = require('express');
var router = express.Router();
var fs=require("fs");
/* GET home page. */
var zry=fs.readFileSync("public/index.txt","utf-8");
var wgl=fs.readFileSync("public/syy.txt","utf-8");
var num=zry.toString().slice(-1);
var num2=wgl.toString().slice(-1);
router.get('/', function(req, res, next) {
  var sum=num++;
  res.render('index', { data: sum });
  fs.writeFileSync("public/index.txt","页面刷新次数："+sum)

});
router.get('/hmx', function(req, res, next) {
	var sum2=num2++;
	res.render('syy', { data2: sum2 });
	fs.writeFileSync("public/syy.txt","页面刷新次数："+sum2)
});

module.exports = router;