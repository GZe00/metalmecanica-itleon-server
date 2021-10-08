const { roles, users } = require("../models");

class RolService {
  static async getAll() {
    try {
      let result = await roles.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id) {
    try {
      let result = await roles.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(newRoles) {
    try {
      let result = await roles.create(newRoles);
      result = JSON.parse(JSON.stringify(result));
      delete result.password; //Eliminamos la contraseña para que no aparezca en la respuesta
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(updatedRol, user_id) {
    try {
      let result = await roles.update(updatedRol, { where: { user_id } });
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
      let result = await roles.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async joinUser(id) {
    try {
      let result = await roles.findAll({
        where: { user_id: id },
        // include: [
        //   {
        //     model: users,
        //     as: 'user',
        //   },
        // ],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = RolService;
