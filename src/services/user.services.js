const { users } = require("../models");

class UserService {
  static async getAll() {
    try {
      let result = await users.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id) {
    try {
      let result = await users.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(newUser) {
    try {
      let result = await users.create(newUser);
      result = JSON.parse(JSON.stringify(result));
      delete result.password; //Eliminamos la contraseña para que no aparezca en la respuesta
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(updatedUser, id) {
    try {
      let result = await users.update(updatedUser, { where: { id } });
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
      let result = await users.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserService;
