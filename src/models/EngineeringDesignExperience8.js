const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return EngineeringDesignExperience8.init(sequelize, DataTypes);
}

class EngineeringDesignExperience8 extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    document_0_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'document_0',
        key: 'id'
      }
    },
    organism: {
      type: DataTypes.STRING,
      allowNull: true
    },
    period: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    experiencie: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'engineering_designExperience_8',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "engineering_designExperience_8_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return EngineeringDesignExperience8;
  }
}
