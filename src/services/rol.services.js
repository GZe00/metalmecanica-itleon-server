const { roles } = require("../models");

class RolService {
    static async getAll(){
        try {
            let db_roles = await roles.findAll();
            return db_roles;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = RolService