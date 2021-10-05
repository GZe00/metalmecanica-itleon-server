const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Classes.init(sequelize, DataTypes);
}

class Classes extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    semester_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'semester',
        key: 'id'
      }
    },
    enrollment: {
      type: DataTypes.STRING,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'classes',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "classes_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return Classes;
  }
}
