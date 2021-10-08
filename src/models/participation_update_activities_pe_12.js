const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return participation_update_activities_pe_12.init(sequelize, DataTypes);
}

class participation_update_activities_pe_12 extends Sequelize.Model {
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
    review: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'participation_update_activities_pe_12',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "participation_update_activities_pe_12_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return participation_update_activities_pe_12;
  }
}
