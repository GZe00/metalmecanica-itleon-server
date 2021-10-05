"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _database = require("../database/database");

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Definir modelo de la DB
var User = _database.sequelize.define('users', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  names: {
    type: _sequelize["default"].STRING(20),
    allowNull: false
  },
  lastnames: {
    type: _sequelize["default"].STRING(20),
    allowNull: false
  },
  controlnumber: {
    type: _sequelize["default"].INTEGER,
    allowNull: false,
    unique: true
  },
  email: {
    type: _sequelize["default"].STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  birthday: {
    type: _sequelize["default"].DATE
  },
  gender: {
    type: _sequelize["default"].STRING(1)
  },
  roles: {
    type: _sequelize["default"].STRING,
    allowNull: false
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

var _default = User; // 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Users extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   Users.init({
//     id: DataTypes.INTEGER,
//     names: DataTypes.STRING,
//     lastnames: DataTypes.STRING,
//     controlnumber: DataTypes.INTEGER,
//     email: DataTypes.STRING,
//     password: DataTypes.STRING,
//     birthday: DataTypes.DATE,
//     gender: DataTypes.STRING,
//     roles: DataTypes.TEXT,
//     createdAt: {
//       type: DataTypes.DATE,
//       defaultValue: DataTypes.literal('CURRENT_TIMESTAMP')
//     },
//     updatedAt: {
//       type: DataTypes.DATE,
//       defaultValue: DataTypes.literal('CURRENT_TIMESTAMP')
//     }
//   }, {
//     sequelize,
//     modelName: 'Users',
//   });
//   return Users;
// };

exports["default"] = _default;