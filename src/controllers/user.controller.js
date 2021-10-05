
// import UserService from "../services/user.services";
const UserService = require("../services/user.services");

const getAllUser = async(req, res, next) => {
    try {
        const user = await UserService.getAll();
        res.json(user)
    } catch (error) {
        next(error);
    }
}

const getUserById = () => {

}

const createUser = () => {

}

const updateUser = () => {

}

const deleteUser = () => {

}

module.exports = {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}