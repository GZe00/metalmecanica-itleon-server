const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Document2.init(sequelize, DataTypes);
}

class Document2 extends Sequelize.Model {
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
  return Document2;
  }
}
