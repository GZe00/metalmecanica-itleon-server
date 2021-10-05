const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return AcknowledgmentsReceived11.init(sequelize, DataTypes);
}

class AcknowledgmentsReceived11 extends Sequelize.Model {
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
    description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'acknowledgments_received_11',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "acknowledgments_received_11_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return AcknowledgmentsReceived11;
  }
}
