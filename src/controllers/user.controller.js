import UserService from "../services/user.services";
// const UserService = require("../services/user.services");

const getAllUser = async (req, res) => {
  try {
    const user = await UserService.getAll();
    res.json({
      message: "Tarea exitosa",
      data: user,
    });
  } catch (error) {
    res.json({
      message: "Algo salió mal",
      error: {},
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const userID = await UserService.getById(id);
    userID != null
      ? res.json({
          message: "Tarea exitosa",
          data: userID,
        })
      : res.json({
          message: "Usuario no encontrado",
          data: [],
        });
  } catch (error) {
    res.json({
      message: "Algo salió mal",
      error: {},
    });
  }
};

const createUser = async (req, res) => {
  try {
    const {
      names,
      lastnames,
      controlnumber,
      email,
      password,
      birthday,
      gender,
    } = req.body;
    const newUser = {
      names,
      lastnames,
      controlnumber,
      email,
      password,
      birthday,
      gender,
    };
    const userUp = await UserService.create(newUser);
    res.status(201).json({
      message: "Tarea exitosa",
      data: userUp,
    });
  } catch (error) {
    res.json({
      message: "Algo salió mal",
      error: {},
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      names,
      lastnames,
      controlnumber,
      email,
      password,
      birthday,
      gender,
    } = req.body;

    const updatedUser = {
      names,
      lastnames,
      controlnumber,
      email,
      password,
      birthday,
      gender,
    };

    const user = await UserService.update(updatedUser, id);
    if (user) {
      return res.json({
        message: `Los datos del usuario ${names} han sido actualizados correctamente`,
      });
    }
    return res.json({
      message: "No se ha podido actualizar el registro en el sistema",
    });
  } catch (error) {
    res.json({
      message: "Algo salió mal",
      error: {},
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await UserService.delete(id);
    if (deleted) {
      return res.json({ message: "Se ha eliminado el registro en el sistema" });
    }
    return res.json({
      message: "No se ha podido eliminar el registro en el sistema",
    });
  } catch (error) {
    res.json({
      message: "Algo salió mal",
      error: {},
    });
  }
};

module.exports = {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
