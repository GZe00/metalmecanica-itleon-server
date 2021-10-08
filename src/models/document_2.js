const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return document_2.init(sequelize, DataTypes);
}

class document_2 extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    teach_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'document_2',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "document_2_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return document_2;
  }
}
