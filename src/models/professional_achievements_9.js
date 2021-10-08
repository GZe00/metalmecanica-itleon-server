const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return professional_achievements_9.init(sequelize, DataTypes);
}

class professional_achievements_9 extends Sequelize.Model {
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
    tableName: 'professional_achievements_9',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "professional_achievements_9_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return professional_achievements_9;
  }
}
