var DataTypes = require("sequelize").DataTypes;
var _academic_management_5 = require("./academic_management_5");
var _academic_productsPE_6 = require("./academic_productsPE_6");
var _acknowledgments_received_11 = require("./acknowledgments_received_11");
var _ciencias_basicas_0 = require("./ciencias_basicas_0");
var _ciencias_basicas_1 = require("./ciencias_basicas_1");
var _ciencias_economicas_5 = require("./ciencias_economicas_5");
var _ciencias_ingenieria_2 = require("./ciencias_ingenieria_2");
var _ciencias_sociales_4 = require("./ciencias_sociales_4");
var _classes = require("./classes");
var _disciplinary_update_4 = require("./disciplinary_update_4");
var _document_0 = require("./document_0");
var _document_1 = require("./document_1");
var _document_2 = require("./document_2");
var _educational_background_2 = require("./educational_background_2");
var _engineering_designExperience_8 = require("./engineering_designExperience_8");
var _ingenieria_aplicada_3 = require("./ingenieria_aplicada_3");
var _otras_areas_6 = require("./otras_areas_6");
var _participation_update_activities_pe_12 = require("./participation_update_activities_pe_12");
var _professional_achievements_9 = require("./professional_achievements_9");
var _professional_experience_7 = require("./professional_experience_7");
var _professional_involvement_10 = require("./professional_involvement_10");
var _roles = require("./roles");
var _semester = require("./semester");
var _teach_class = require("./teach_class");
var _teacher_training_3 = require("./teacher_training_3");
var _users = require("./users");
var _validate_account = require("./validate_account");

function initModels(sequelize) {
  var academic_management_5 = _academic_management_5(sequelize, DataTypes);
  var academic_productsPE_6 = _academic_productsPE_6(sequelize, DataTypes);
  var acknowledgments_received_11 = _acknowledgments_received_11(sequelize, DataTypes);
  var ciencias_basicas_0 = _ciencias_basicas_0(sequelize, DataTypes);
  var ciencias_basicas_1 = _ciencias_basicas_1(sequelize, DataTypes);
  var ciencias_economicas_5 = _ciencias_economicas_5(sequelize, DataTypes);
  var ciencias_ingenieria_2 = _ciencias_ingenieria_2(sequelize, DataTypes);
  var ciencias_sociales_4 = _ciencias_sociales_4(sequelize, DataTypes);
  var classes = _classes(sequelize, DataTypes);
  var disciplinary_update_4 = _disciplinary_update_4(sequelize, DataTypes);
  var document_0 = _document_0(sequelize, DataTypes);
  var document_1 = _document_1(sequelize, DataTypes);
  var document_2 = _document_2(sequelize, DataTypes);
  var educational_background_2 = _educational_background_2(sequelize, DataTypes);
  var engineering_designExperience_8 = _engineering_designExperience_8(sequelize, DataTypes);
  var ingenieria_aplicada_3 = _ingenieria_aplicada_3(sequelize, DataTypes);
  var otras_areas_6 = _otras_areas_6(sequelize, DataTypes);
  var participation_update_activities_pe_12 = _participation_update_activities_pe_12(sequelize, DataTypes);
  var professional_achievements_9 = _professional_achievements_9(sequelize, DataTypes);
  var professional_experience_7 = _professional_experience_7(sequelize, DataTypes);
  var professional_involvement_10 = _professional_involvement_10(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var semester = _semester(sequelize, DataTypes);
  var teach_class = _teach_class(sequelize, DataTypes);
  var teacher_training_3 = _teacher_training_3(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var validate_account = _validate_account(sequelize, DataTypes);

  teach_class.belongsTo(classes, { as: "id_class_class", foreignKey: "id_class"});
  classes.hasMany(teach_class, { as: "teach_classes", foreignKey: "id_class"});
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
  ciencias_basicas_0.belongsTo(document_2, { as: "document_2", foreignKey: "document_2_id"});
  document_2.hasMany(ciencias_basicas_0, { as: "ciencias_basicas_0s", foreignKey: "document_2_id"});
  ciencias_basicas_1.belongsTo(document_2, { as: "document_2", foreignKey: "document_2_id"});
  document_2.hasMany(ciencias_basicas_1, { as: "ciencias_basicas_1s", foreignKey: "document_2_id"});
  ciencias_economicas_5.belongsTo(document_2, { as: "document_2", foreignKey: "document_2_id"});
  document_2.hasMany(ciencias_economicas_5, { as: "ciencias_economicas_5s", foreignKey: "document_2_id"});
  ciencias_ingenieria_2.belongsTo(document_2, { as: "document_2", foreignKey: "document_2_id"});
  document_2.hasMany(ciencias_ingenieria_2, { as: "ciencias_ingenieria_2s", foreignKey: "document_2_id"});
  ciencias_sociales_4.belongsTo(document_2, { as: "document_2", foreignKey: "document_2_id"});
  document_2.hasMany(ciencias_sociales_4, { as: "ciencias_sociales_4s", foreignKey: "document_2_id"});
  ingenieria_aplicada_3.belongsTo(document_2, { as: "document_2", foreignKey: "document_2_id"});
  document_2.hasMany(ingenieria_aplicada_3, { as: "ingenieria_aplicada_3s", foreignKey: "document_2_id"});
  otras_areas_6.belongsTo(document_2, { as: "document_2", foreignKey: "document_2_id"});
  document_2.hasMany(otras_areas_6, { as: "otras_areas_6s", foreignKey: "document_2_id"});
  semester.belongsTo(roles, { as: "id_role", foreignKey: "id"});
  roles.hasOne(semester, { as: "semester", foreignKey: "id"});
  classes.belongsTo(semester, { as: "semester", foreignKey: "semester_id"});
  semester.hasMany(classes, { as: "classes", foreignKey: "semester_id"});
  roles.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(roles, { as: "roles", foreignKey: "user_id"});
  validate_account.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(validate_account, { as: "validate_accounts", foreignKey: "user_id"});

  return {
    academic_management_5,
    academic_productsPE_6,
    acknowledgments_received_11,
    ciencias_basicas_0,
    ciencias_basicas_1,
    ciencias_economicas_5,
    ciencias_ingenieria_2,
    ciencias_sociales_4,
    classes,
    disciplinary_update_4,
    document_0,
    document_1,
    document_2,
    educational_background_2,
    engineering_designExperience_8,
    ingenieria_aplicada_3,
    otras_areas_6,
    participation_update_activities_pe_12,
    professional_achievements_9,
    professional_experience_7,
    professional_involvement_10,
    roles,
    semester,
    teach_class,
    teacher_training_3,
    users,
    validate_account,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
