const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Document1.init(sequelize, DataTypes);
}

class Document1 extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'roles',
        key: 'id'
      }
    },
    teach_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'document_1',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "document_1_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return Document1;
  }
}
