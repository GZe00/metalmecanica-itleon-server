const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return ValidateAccount.init(sequelize, DataTypes);
}

class ValidateAccount extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    hash: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'validate_account',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "validate_account_pkey",
        unique: true,
        fields: [
          { name: "hash" },
        ]
      },
    ]
  });
  return ValidateAccount;
  }
}
