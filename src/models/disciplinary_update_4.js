const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return disciplinary_update_4.init(sequelize, DataTypes);
}

class disciplinary_update_4 extends Sequelize.Model {
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
    type_disciplinary: {
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
    tableName: 'disciplinary_update_4',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "disciplinary_update_4_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return disciplinary_update_4;
  }
}
