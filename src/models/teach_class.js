const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return teach_class.init(sequelize, DataTypes);
}

class teach_class extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_teach: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_class: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'classes',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'teach_class',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "teach_class_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return teach_class;
  }
}
