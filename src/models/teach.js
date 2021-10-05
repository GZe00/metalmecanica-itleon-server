const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return teach.init(sequelize, DataTypes);
}

class teach extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rol_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'roles',
        key: 'id'
      }
    },
    is_teach: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'teach',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "teach_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return teach;
  }
}
