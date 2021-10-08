const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return academic_productsPE_6.init(sequelize, DataTypes);
}

class academic_productsPE_6 extends Sequelize.Model {
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
    num: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'academic_productsPE_6',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "academic_productsPE_6_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return academic_productsPE_6;
  }
}
