
import { sequelize } from '../database/database';
import Sequelize from "sequelize";



//Definir modelo de la DB

const User = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  names: {
    type: Sequelize.STRING(20),
    allowNull: false
  },
  lastnames: {
    type: Sequelize.STRING(20),
    allowNull: false
  },
  controlnumber: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  birthday: {
    type: Sequelize.DATE
  },
  gender: {
    type: Sequelize.STRING(1)
  },
  roles: {
    type: Sequelize.STRING,
    allowNull: false
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

export default User

    // 'use strict';
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