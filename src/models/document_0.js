const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return document_0.init(sequelize, DataTypes);
}

class document_0 extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    teach_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    names: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lastnames: {
      type: DataTypes.STRING,
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    job_as: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'document_0',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "document_0_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return document_0;
  }
}
