const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Roles.init(sequelize, DataTypes);
}

class Roles extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    type: {
      type: DataTypes.ENUM("jefe_de_departamento","jefatura_docencia","jefatura_vinculacion","jefatura_investigacion","jefatura_laboratorio","docente","estudiante"),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'roles',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "roles_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return Roles;
  }
}
