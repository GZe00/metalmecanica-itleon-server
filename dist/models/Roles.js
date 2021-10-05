"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _database = require("../database/database");

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Definir modelo de la DB
var Roles = _database.sequelize.define('roles', {
  name: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  userid: {
    type: _sequelize["default"].INTEGER
  },
  createdAt: {
    allowNull: false,
    type: _sequelize["default"].DATE,
    defaultValue: _database.sequelize.literal('CURRENT_TIMESTAMP')
  },
  updatedAt: {
    allowNull: false,
    type: _sequelize["default"].DATE,
    defaultValue: _database.sequelize.literal('CURRENT_TIMESTAMP')
  }
}, {
  timestamps: false
});

var _default = Roles; // 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Roles extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   Roles.init({
//     name: DataTypes.STRING,
//     userid: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'Roles',
//     underscored: true,
//   });
//   return Roles;
// };

exports["default"] = _default;