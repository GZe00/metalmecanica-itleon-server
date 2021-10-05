const { user } = require('../models');

class UserService {
    static async getAll() {
        try {
            let result = await user.findAll();
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getById() {
        try {
            let result = await user.findByPk(id);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async create(newUser) {
        try {
            let result = await user.create(newUser);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async update(updatedUser, id) {
        try {
            let result = await user.update(updatedUser, { where: { id } });
        } catch (error) {
            throw error;
        }
    }

    static async delete(id) {
        try {
            let result = await user.destroy({ where: { id } });
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserService;
