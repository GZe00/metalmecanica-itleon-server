const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return academic_management_5.init(sequelize, DataTypes);
}

class academic_management_5 extends Sequelize.Model {
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
    activity: {
      type: DataTypes.STRING,
      allowNull: true
    },
    institution: {
      type: DataTypes.STRING,
      allowNull: true
    },
    from: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    to: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'academic_management_5',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "academic_management_5_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return academic_management_5;
  }
}
