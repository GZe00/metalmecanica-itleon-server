const { User } = require("../models");

class UserService {
  static async getAll() {
    try {
      let result = await User.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id) {
    try {
      let result = await User.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(newUser) {
    try {
      let result = await User.create(newUser);
      result = JSON.parse(JSON.stringify(result));
      delete result.password; //Eliminamos la contraseña para que no aparezca en la respuesta
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(updatedUser, id) {
    try {
      let result = await User.update(updatedUser, { where: { id } });
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
      let result = await User.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserService;
