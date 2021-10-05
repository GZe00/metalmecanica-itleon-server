const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return educational_background_2.init(sequelize, DataTypes);
}

class educational_background_2 extends Sequelize.Model {
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
    level: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    name: {
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
    professional_license: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'educational_background_2',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "educational_background_2_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return educational_background_2;
  }
}
