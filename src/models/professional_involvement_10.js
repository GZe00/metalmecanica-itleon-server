const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return professional_involvement_10.init(sequelize, DataTypes);
}

class professional_involvement_10 extends Sequelize.Model {
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
    participation: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'professional_involvement_10',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "professional_involvement_10_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return professional_involvement_10;
  }
}
