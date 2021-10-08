var DataTypes = require("sequelize").DataTypes;
var _AcademicManagement5 = require("./AcademicManagement5");
var _AcademicProductsPe6 = require("./AcademicProductsPe6");
var _AcknowledgmentsReceived11 = require("./AcknowledgmentsReceived11");
var _CienciasBasicas0 = require("./CienciasBasicas0");
var _CienciasBasicas1 = require("./CienciasBasicas1");
var _CienciasEconomicas5 = require("./CienciasEconomicas5");
var _CienciasIngenieria2 = require("./CienciasIngenieria2");
var _CienciasSociales4 = require("./CienciasSociales4");
var _Classes = require("./Classes");
var _DisciplinaryUpdate4 = require("./DisciplinaryUpdate4");
var _Document0 = require("./Document0");
var _Document1 = require("./Document1");
var _Document2 = require("./Document2");
var _EducationalBackground2 = require("./EducationalBackground2");
var _EngineeringDesignExperience8 = require("./EngineeringDesignExperience8");
var _IngenieriaAplicada3 = require("./IngenieriaAplicada3");
var _OtrasAreas6 = require("./OtrasAreas6");
var _ParticipationUpdateActivitiesPe12 = require("./ParticipationUpdateActivitiesPe12");
var _ProfessionalAchievements9 = require("./ProfessionalAchievements9");
var _ProfessionalExperience7 = require("./ProfessionalExperience7");
var _ProfessionalInvolvement10 = require("./ProfessionalInvolvement10");
var _Roles = require("./roles");
var _Semester = require("./Semester");
var _TeachClass = require("./TeachClass");
var _TeacherTraining3 = require("./TeacherTraining3");
var _User = require("./user");
var _ValidateAccount = require("./ValidateAccount");

function initModels(sequelize) {
  var AcademicManagement5 = _AcademicManagement5(sequelize, DataTypes);
  var AcademicProductsPe6 = _AcademicProductsPe6(sequelize, DataTypes);
  var AcknowledgmentsReceived11 = _AcknowledgmentsReceived11(sequelize, DataTypes);
  var CienciasBasicas0 = _CienciasBasicas0(sequelize, DataTypes);
  var CienciasBasicas1 = _CienciasBasicas1(sequelize, DataTypes);
  var CienciasEconomicas5 = _CienciasEconomicas5(sequelize, DataTypes);
  var CienciasIngenieria2 = _CienciasIngenieria2(sequelize, DataTypes);
  var CienciasSociales4 = _CienciasSociales4(sequelize, DataTypes);
  var Classes = _Classes(sequelize, DataTypes);
  var DisciplinaryUpdate4 = _DisciplinaryUpdate4(sequelize, DataTypes);
  var Document0 = _Document0(sequelize, DataTypes);
  var Document1 = _Document1(sequelize, DataTypes);
  var Document2 = _Document2(sequelize, DataTypes);
  var EducationalBackground2 = _EducationalBackground2(sequelize, DataTypes);
  var EngineeringDesignExperience8 = _EngineeringDesignExperience8(sequelize, DataTypes);
  var IngenieriaAplicada3 = _IngenieriaAplicada3(sequelize, DataTypes);
  var OtrasAreas6 = _OtrasAreas6(sequelize, DataTypes);
  var ParticipationUpdateActivitiesPe12 = _ParticipationUpdateActivitiesPe12(sequelize, DataTypes);
  var ProfessionalAchievements9 = _ProfessionalAchievements9(sequelize, DataTypes);
  var ProfessionalExperience7 = _ProfessionalExperience7(sequelize, DataTypes);
  var ProfessionalInvolvement10 = _ProfessionalInvolvement10(sequelize, DataTypes);
  var Roles = _Roles(sequelize, DataTypes);
  var Semester = _Semester(sequelize, DataTypes);
  var TeachClass = _TeachClass(sequelize, DataTypes);
  var TeacherTraining3 = _TeacherTraining3(sequelize, DataTypes);
  var User = _User(sequelize, DataTypes);
  var ValidateAccount = _ValidateAccount(sequelize, DataTypes);

  TeachClass.belongsTo(Classes, { as: "id_class_class", foreignKey: "id_class"});
  Classes.hasMany(TeachClass, { as: "teach_classes", foreignKey: "id_class"});
  AcademicManagement5.belongsTo(Document0, { as: "document_0", foreignKey: "document_0_id"});
  Document0.hasMany(AcademicManagement5, { as: "academic_management_5s", foreignKey: "document_0_id"});
  AcademicProductsPe6.belongsTo(Document0, { as: "document_0", foreignKey: "document_0_id"});
  Document0.hasMany(AcademicProductsPe6, { as: "academic_productsPE_6s", foreignKey: "document_0_id"});
  AcknowledgmentsReceived11.belongsTo(Document0, { as: "document_0", foreignKey: "document_0_id"});
  Document0.hasMany(AcknowledgmentsReceived11, { as: "acknowledgments_received_11s", foreignKey: "document_0_id"});
  DisciplinaryUpdate4.belongsTo(Document0, { as: "document_0", foreignKey: "document_0_id"});
  Document0.hasMany(DisciplinaryUpdate4, { as: "disciplinary_update_4s", foreignKey: "document_0_id"});
  EducationalBackground2.belongsTo(Document0, { as: "document_0", foreignKey: "document_0_id"});
  Document0.hasMany(EducationalBackground2, { as: "educational_background_2s", foreignKey: "document_0_id"});
  EngineeringDesignExperience8.belongsTo(Document0, { as: "document_0", foreignKey: "document_0_id"});
  Document0.hasMany(EngineeringDesignExperience8, { as: "engineering_designExperience_8s", foreignKey: "document_0_id"});
  ParticipationUpdateActivitiesPe12.belongsTo(Document0, { as: "document_0", foreignKey: "document_0_id"});
  Document0.hasMany(ParticipationUpdateActivitiesPe12, { as: "participation_update_activities_pe_12s", foreignKey: "document_0_id"});
  ProfessionalAchievements9.belongsTo(Document0, { as: "document_0", foreignKey: "document_0_id"});
  Document0.hasMany(ProfessionalAchievements9, { as: "professional_achievements_9s", foreignKey: "document_0_id"});
  ProfessionalExperience7.belongsTo(Document0, { as: "document_0", foreignKey: "document_0_id"});
  Document0.hasMany(ProfessionalExperience7, { as: "professional_experience_7s", foreignKey: "document_0_id"});
  ProfessionalInvolvement10.belongsTo(Document0, { as: "document_0", foreignKey: "document_0_id"});
  Document0.hasMany(ProfessionalInvolvement10, { as: "professional_involvement_10s", foreignKey: "document_0_id"});
  TeacherTraining3.belongsTo(Document0, { as: "document_0", foreignKey: "document_0_id"});
  Document0.hasMany(TeacherTraining3, { as: "teacher_training_3s", foreignKey: "document_0_id"});
  CienciasBasicas0.belongsTo(Document2, { as: "document_2", foreignKey: "document_2_id"});
  Document2.hasMany(CienciasBasicas0, { as: "ciencias_basicas_0s", foreignKey: "document_2_id"});
  CienciasBasicas1.belongsTo(Document2, { as: "document_2", foreignKey: "document_2_id"});
  Document2.hasMany(CienciasBasicas1, { as: "ciencias_basicas_1s", foreignKey: "document_2_id"});
  CienciasEconomicas5.belongsTo(Document2, { as: "document_2", foreignKey: "document_2_id"});
  Document2.hasMany(CienciasEconomicas5, { as: "ciencias_economicas_5s", foreignKey: "document_2_id"});
  CienciasIngenieria2.belongsTo(Document2, { as: "document_2", foreignKey: "document_2_id"});
  Document2.hasMany(CienciasIngenieria2, { as: "ciencias_ingenieria_2s", foreignKey: "document_2_id"});
  CienciasSociales4.belongsTo(Document2, { as: "document_2", foreignKey: "document_2_id"});
  Document2.hasMany(CienciasSociales4, { as: "ciencias_sociales_4s", foreignKey: "document_2_id"});
  IngenieriaAplicada3.belongsTo(Document2, { as: "document_2", foreignKey: "document_2_id"});
  Document2.hasMany(IngenieriaAplicada3, { as: "ingenieria_aplicada_3s", foreignKey: "document_2_id"});
  OtrasAreas6.belongsTo(Document2, { as: "document_2", foreignKey: "document_2_id"});
  Document2.hasMany(OtrasAreas6, { as: "otras_areas_6s", foreignKey: "document_2_id"});
  Document0.belongsTo(Roles, { as: "id_role", foreignKey: "id"});
  Roles.hasOne(Document0, { as: "document_0", foreignKey: "id"});
  Document1.belongsTo(Roles, { as: "id_role", foreignKey: "id"});
  Roles.hasOne(Document1, { as: "document_1", foreignKey: "id"});
  Document2.belongsTo(Roles, { as: "id_role", foreignKey: "id"});
  Roles.hasOne(Document2, { as: "document_2", foreignKey: "id"});
  Semester.belongsTo(Roles, { as: "id_role", foreignKey: "id"});
  Roles.hasOne(Semester, { as: "semester", foreignKey: "id"});
  TeachClass.belongsTo(Roles, { as: "id_role", foreignKey: "id"});
  Roles.hasOne(TeachClass, { as: "teach_class", foreignKey: "id"});
  Classes.belongsTo(Semester, { as: "semester", foreignKey: "semester_id"});
  Semester.hasMany(Classes, { as: "classes", foreignKey: "semester_id"});
  Roles.belongsTo(User, { as: "user", foreignKey: "user_id"});
  User.hasMany(Roles, { as: "roles", foreignKey: "user_id"});
  ValidateAccount.belongsTo(User, { as: "user", foreignKey: "user_id"});
  User.hasMany(ValidateAccount, { as: "validate_accounts", foreignKey: "user_id"});

  return {
    AcademicManagement5,
    AcademicProductsPe6,
    AcknowledgmentsReceived11,
    CienciasBasicas0,
    CienciasBasicas1,
    CienciasEconomicas5,
    CienciasIngenieria2,
    CienciasSociales4,
    Classes,
    DisciplinaryUpdate4,
    Document0,
    Document1,
    Document2,
    EducationalBackground2,
    EngineeringDesignExperience8,
    IngenieriaAplicada3,
    OtrasAreas6,
    ParticipationUpdateActivitiesPe12,
    ProfessionalAchievements9,
    ProfessionalExperience7,
    ProfessionalInvolvement10,
    Roles,
    Semester,
    TeachClass,
    TeacherTraining3,
    User,
    ValidateAccount,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
