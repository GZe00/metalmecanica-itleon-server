const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return TeacherTraining3.init(sequelize, DataTypes);
}

class TeacherTraining3 extends Sequelize.Model {
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
    type_training: {
      type: DataTypes.STRING,
      allowNull: true
    },
    institution: {
      type: DataTypes.STRING,
      allowNull: true
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true
    },
    year_given: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    hours: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'teacher_training_3',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "teacher_training_3_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return TeacherTraining3;
  }
}
