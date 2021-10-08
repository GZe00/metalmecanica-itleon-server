const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return ProfessionalExperience7.init(sequelize, DataTypes);
}

class ProfessionalExperience7 extends Sequelize.Model {
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
    organization: {
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
    tableName: 'professional_experience_7',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "professional_experience_7_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return ProfessionalExperience7;
  }
}
