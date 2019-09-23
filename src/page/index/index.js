'use strict'

require('./index.css');
require('@/common/nav/index.js');
require('@/common/header/index.js');
require('@/common/nav-side/index.js');
require('@/common/nav-simple/index.js');

var _mm = require('util/mm.js');
var navSide = require('@/common/nav-side/index.js');

navSide.init({
  name: 'user-center'
});
navSide.init({
  name: 'order-list'
});
navSide.init({
  name: 'user-pass-update'
});
