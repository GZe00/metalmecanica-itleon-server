const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return User.init(sequelize, DataTypes);
}

class User extends Sequelize.Model {
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
      unique: "user_controlnumber_key"
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "user_email_key"
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
    }
  }, {
    sequelize,
    tableName: 'user',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "user_controlnumber_key",
        unique: true,
        fields: [
          { name: "controlnumber" },
        ]
      },
      {
        name: "user_email_key",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "user_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return User;
  }
}
