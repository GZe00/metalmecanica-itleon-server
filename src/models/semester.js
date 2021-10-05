const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Semester.init(sequelize, DataTypes);
}

class Semester extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'roles',
        key: 'id'
      }
    },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    grade: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'semester',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "semester_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return Semester;
  }
}
