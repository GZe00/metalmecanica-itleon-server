const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return users.init(sequelize, DataTypes);
}

class users extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    names: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastnames: {
      type: DataTypes.STRING,
      allowNull: false
    },
    controlnumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "users_controlnumber_key"
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "users_email_key"
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    confirmEmail: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    first_time: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'users',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "users_controlnumber_key",
        unique: true,
        fields: [
          { name: "controlnumber" },
        ]
      },
      {
        name: "users_email_key",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "users_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return users;
  }
}
