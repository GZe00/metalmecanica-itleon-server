const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return CienciasSociales4.init(sequelize, DataTypes);
}

class CienciasSociales4 extends Sequelize.Model {
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
    hour_theory: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    hour_practice: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    hour_total: {
      type: DataTypes.SMALLINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ciencias_sociales_4',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ciencias_sociales_4_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return CienciasSociales4;
  }
}
