const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return CienciasBasicas0.init(sequelize, DataTypes);
}

class CienciasBasicas0 extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    document_2_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'document_2',
        key: 'id'
      }
    },
    key: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ciencias_basicas_0',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ciencias_basicas_0_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return CienciasBasicas0;
  }
}
