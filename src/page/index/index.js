//通过require请求
var cats = require('./cats.js');
//var$ =require('jquery');
require('./index.css');
var common = require('../common.js');
$('body').html("我是你爸爸");
common();
console.log(cats);