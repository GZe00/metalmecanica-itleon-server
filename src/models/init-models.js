var DataTypes = require("sequelize").DataTypes;
var _academic_management_5 = require("./academic_management_5");
var _academic_productsPE_6 = require("./academic_productsPE_6");
var _acknowledgments_received_11 = require("./acknowledgments_received_11");
var _disciplinary_update_4 = require("./disciplinary_update_4");
var _document_0 = require("./document_0");
var _educational_background_2 = require("./educational_background_2");
var _engineering_designExperience_8 = require("./engineering_designExperience_8");
var _participation_update_activities_pe_12 = require("./participation_update_activities_pe_12");
var _professional_achievements_9 = require("./professional_achievements_9");
var _professional_experience_7 = require("./professional_experience_7");
var _professional_involvement_10 = require("./professional_involvement_10");
var _roles = require("./roles");
var _teach = require("./teach");
var _teacher_training_3 = require("./teacher_training_3");
var _user = require("./user");
var _validate_account = require("./validate_account");

function initModels(sequelize) {
  var academic_management_5 = _academic_management_5(sequelize, DataTypes);
  var academic_productsPE_6 = _academic_productsPE_6(sequelize, DataTypes);
  var acknowledgments_received_11 = _acknowledgments_received_11(sequelize, DataTypes);
  var disciplinary_update_4 = _disciplinary_update_4(sequelize, DataTypes);
  var document_0 = _document_0(sequelize, DataTypes);
  var educational_background_2 = _educational_background_2(sequelize, DataTypes);
  var engineering_designExperience_8 = _engineering_designExperience_8(sequelize, DataTypes);
  var participation_update_activities_pe_12 = _participation_update_activities_pe_12(sequelize, DataTypes);
  var professional_achievements_9 = _professional_achievements_9(sequelize, DataTypes);
  var professional_experience_7 = _professional_experience_7(sequelize, DataTypes);
  var professional_involvement_10 = _professional_involvement_10(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var teach = _teach(sequelize, DataTypes);
  var teacher_training_3 = _teacher_training_3(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var validate_account = _validate_account(sequelize, DataTypes);

  academic_management_5.belongsTo(document_0, { as: "document_0", foreignKey: "document_0_id"});
  document_0.hasMany(academic_management_5, { as: "academic_management_5s", foreignKey: "document_0_id"});
  academic_productsPE_6.belongsTo(document_0, { as: "document_0", foreignKey: "document_0_id"});
  document_0.hasMany(academic_productsPE_6, { as: "academic_productsPE_6s", foreignKey: "document_0_id"});
  acknowledgments_received_11.belongsTo(document_0, { as: "document_0", foreignKey: "document_0_id"});
  document_0.hasMany(acknowledgments_received_11, { as: "acknowledgments_received_11s", foreignKey: "document_0_id"});
  disciplinary_update_4.belongsTo(document_0, { as: "document_0", foreignKey: "document_0_id"});
  document_0.hasMany(disciplinary_update_4, { as: "disciplinary_update_4s", foreignKey: "document_0_id"});
  educational_background_2.belongsTo(document_0, { as: "document_0", foreignKey: "document_0_id"});
  document_0.hasMany(educational_background_2, { as: "educational_background_2s", foreignKey: "document_0_id"});
  engineering_designExperience_8.belongsTo(document_0, { as: "document_0", foreignKey: "document_0_id"});
  document_0.hasMany(engineering_designExperience_8, { as: "engineering_designExperience_8s", foreignKey: "document_0_id"});
  participation_update_activities_pe_12.belongsTo(document_0, { as: "document_0", foreignKey: "document_0_id"});
  document_0.hasMany(participation_update_activities_pe_12, { as: "participation_update_activities_pe_12s", foreignKey: "document_0_id"});
  professional_achievements_9.belongsTo(document_0, { as: "document_0", foreignKey: "document_0_id"});
  document_0.hasMany(professional_achievements_9, { as: "professional_achievements_9s", foreignKey: "document_0_id"});
  professional_experience_7.belongsTo(document_0, { as: "document_0", foreignKey: "document_0_id"});
  document_0.hasMany(professional_experience_7, { as: "professional_experience_7s", foreignKey: "document_0_id"});
  professional_involvement_10.belongsTo(document_0, { as: "document_0", foreignKey: "document_0_id"});
  document_0.hasMany(professional_involvement_10, { as: "professional_involvement_10s", foreignKey: "document_0_id"});
  teacher_training_3.belongsTo(document_0, { as: "document_0", foreignKey: "document_0_id"});
  document_0.hasMany(teacher_training_3, { as: "teacher_training_3s", foreignKey: "document_0_id"});
  teach.belongsTo(roles, { as: "rol", foreignKey: "rol_id"});
  roles.hasMany(teach, { as: "teaches", foreignKey: "rol_id"});
  document_0.belongsTo(teach, { as: "teach", foreignKey: "teach_id"});
  teach.hasMany(document_0, { as: "document_0s", foreignKey: "teach_id"});
  roles.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(roles, { as: "roles", foreignKey: "user_id"});
  validate_account.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(validate_account, { as: "validate_accounts", foreignKey: "user_id"});

  return {
    academic_management_5,
    academic_productsPE_6,
    acknowledgments_received_11,
    disciplinary_update_4,
    document_0,
    educational_background_2,
    engineering_designExperience_8,
    participation_update_activities_pe_12,
    professional_achievements_9,
    professional_experience_7,
    professional_involvement_10,
    roles,
    teach,
    teacher_training_3,
    user,
    validate_account,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
