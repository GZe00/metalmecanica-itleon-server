import RolService from "../services/rol.services";
// const RolService = require("../services/user.services");

const getAllRol = async (req, res) => {
  try {
    const rol = await RolService.getAll();
    res.json({
      message: "Tarea exitosa",
      data: rol,
    });
  } catch (error) {
    res.json({
      message: "Algo salió mal",
      error: {},
    });
  }
};

const getRolById = async (req, res) => {
  try {
    const { id } = req.params;
    const rolID = await RolService.getById(id);
    rolID != null
      ? res.json({
          message: "Tarea exitosa",
          data: rolID,
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

const createRol = async (req, res) => {
  try {
    const { user_id, type } = req.body;
    const newRol = {
      user_id,
      type,
    };
    const rolUp = await RolService.create(newRol);
    res.status(201).json({
      message: "Rol asignado",
      data: rolUp,
    });
  } catch (error) {
    res.json({
      message: "Algo salió mal",
      error: {},
    });
  }
};

const updateRol = async (req, res) => {
  try {
    const { user_id } = req.params;
    const { type } = req.body;

    const updatedRol = {
      type,
    };

    const rol = await RolService.update(updatedRol, user_id);
    if (rol) {
      return res.json({
        message: `El rol del user_id ${user_id} han sido actualizados correctamente`,
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

const deleteRol = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await RolService.delete(id);
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

const userRol = async (req, res) => {
  try {
    const { id } = req.params;
    const rolUser = await RolService.joinUser(id);
    return res.json({
      message: "Tarea exitosa",
      data: rolUser
    });
  } catch (error) {
    res.json({
      message: "Algo salió mal",
      error,
    });
  }
};

module.exports = {
  getAllRol,
  getRolById,
  createRol,
  updateRol,
  deleteRol,
  userRol,
};
