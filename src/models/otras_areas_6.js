const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return OtrasAreas6.init(sequelize, DataTypes);
}

class OtrasAreas6 extends Sequelize.Model {
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
      allowNull: false
    },
    hour_practice: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    hour_total: {
      type: DataTypes.SMALLINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'otras_areas_6',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "otras_areas_6_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return OtrasAreas6;
  }
}