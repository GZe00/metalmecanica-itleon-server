"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _package = _interopRequireDefault(require("../package.json"));

var _users = _interopRequireDefault(require("./routes/users.routes"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Importando Router
var app = (0, _express["default"])();
app.set('pkg', _package["default"]); //middlewares

app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use('/users', _users["default"]);
app.use('/auth', _auth["default"]);
app.get('/users', function (req, res) {
  res.json({
    name: app.get('pkg').name,
    author: app.get('pkg').author,
    description: app.get('pkg').description,
    version: app.get('pkg').version
  });
}); //routes

var _default = app;
exports["default"] = _default;