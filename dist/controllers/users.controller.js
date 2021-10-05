"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUserById = exports.updateUserById = exports.getUserById = exports.getUsers = exports.createUser = void 0;

var _Users = _interopRequireDefault(require("../models/Users"));

var _Roles = _interopRequireDefault(require("../models/Roles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, names, lastnames, controlnumber, email, password, birthday, gender, roles, newUser;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, names = _req$body.names, lastnames = _req$body.lastnames, controlnumber = _req$body.controlnumber, email = _req$body.email, password = _req$body.password, birthday = _req$body.birthday, gender = _req$body.gender, roles = _req$body.roles;
            _context.prev = 1;
            _context.next = 4;
            return _Users["default"].create({
              names: names,
              lastnames: lastnames,
              controlnumber: controlnumber,
              email: email,
              password: password,
              birthday: birthday,
              gender: gender,
              roles: roles
            }, {
              fields: ['names', 'lastnames', 'controlnumber', 'email', 'password', 'birthday', 'gender', 'roles', "createdAt", "updatedAt"]
            });

          case 4:
            newUser = _context.sent;

            if (!newUser) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.json({
              message: 'Usuario creado',
              data: newUser
            }));

          case 7:
            _context.next = 13;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            res.status(500).json({
              message: 'Something goes wrong',
              data: {}
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 9]]);
  }));

  return function createUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createUser = createUser;

var getUsers = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var users;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Users["default"].findAll();

          case 3:
            users = _context2.sent;
            // const users = await Roles.findAll();
            res.json({
              data: users
            });
            _context2.next = 11;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(500).json({
              message: 'Something goes wrong',
              data: {}
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function getUsers(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getUsers = getUsers;

var getUserById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, user;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _Users["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            user = _context3.sent;
            res.json({
              data: user
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            res.status(500).json({
              message: 'Something goes wrong',
              data: {}
            });

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));

  return function getUserById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getUserById = getUserById;

var updateUserById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, _req$body2, names, lastnames, password, birthday, gender, updatedAt, users;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _req$body2 = req.body, names = _req$body2.names, lastnames = _req$body2.lastnames, password = _req$body2.password, birthday = _req$body2.birthday, gender = _req$body2.gender, updatedAt = _req$body2.updatedAt;
            _context5.next = 5;
            return _Users["default"].findAll({
              attributes: ['id', 'names', 'lastnames', 'controlnumber', 'email', 'password', 'birthday', 'roles', 'updatedAt'],
              where: {
                id: id
              }
            });

          case 5:
            users = _context5.sent;

            if (!(users.length > 0)) {
              _context5.next = 10;
              break;
            }

            users.forEach( /*#__PURE__*/function () {
              var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(user) {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.next = 2;
                        return user.update({
                          names: names,
                          lastnames: lastnames,
                          password: password,
                          birthday: birthday,
                          gender: gender,
                          updatedAt: updatedAt
                        });

                      case 2:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));

              return function (_x9) {
                return _ref5.apply(this, arguments);
              };
            }());
            _context5.next = 11;
            break;

          case 10:
            return _context5.abrupt("return", res.json({
              message: "No content",
              data: {}
            }));

          case 11:
            return _context5.abrupt("return", res.json({
              message: 'user updated succesfully',
              data: users
            }));

          case 14:
            _context5.prev = 14;
            _context5.t0 = _context5["catch"](0);
            res.status(500).json({
              message: 'Something goes wrong'
            });

          case 17:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 14]]);
  }));

  return function updateUserById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateUserById = updateUserById;

var deleteUserById = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, user;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            id = req.params.id;
            _context6.next = 4;
            return _Users["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            user = _context6.sent;
            res.json({
              message: "User with ID ".concat(id, " has been deleted sucessfully")
            });
            _context6.next = 11;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](0);
            res.status(500).json({
              message: 'Something goes wrong',
              data: {}
            });

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 8]]);
  }));

  return function deleteUserById(_x10, _x11) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deleteUserById = deleteUserById;