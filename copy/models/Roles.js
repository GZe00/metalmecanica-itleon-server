import { sequelize } from '../database/database';
import Sequelize from "sequelize";



//Definir modelo de la DB

const Roles = sequelize.define('roles', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  userid: {
    type: Sequelize.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
  }
}, {
  timestamps: false
});

export default Roles


// 'use strict';
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