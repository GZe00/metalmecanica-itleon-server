const { Roles } = require("../models");

class RolService {
  static async getAll() {
    try {
      let result = await Roles.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id) {
    try {
      let result = await Roles.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(newRoles) {
    try {
      let result = await Roles.create(newRoles);
      result = JSON.parse(JSON.stringify(result));
      delete result.password; //Eliminamos la contraseña para que no aparezca en la respuesta
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(updatedRol, user_id) {
    try {
      let result = await Roles.update(updatedRol, { where: { user_id } });
      console.log(result);
      if (result[0] === 0) {
        return false;
      }
      return true;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      let result = await Roles.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = RolService;
