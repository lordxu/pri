// 球桌

var Sprite = require('../runtime/sprite');
var Painter = require('../runtime/painter');
var Rectangle = require('../runtime/rectangle');

var tablePainter = new Painter('./assets/img/desk.png');

var table = new Sprite('table', tablePainter);

table.setSite(0, 0, 800, 442);

table.entity = new Rectangle(40, 42, 720, 356);
table.entity.express = table;

module.exports = table;