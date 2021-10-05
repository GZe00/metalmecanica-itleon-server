import RolService from "../services/rol.services"


const getRolUserById = async(req, res, next) => {
    try {
        const rol = await RolService.getAll();
        res.json({
            message: "Tarea exitosa",
            data: rol
        })
    } catch (error) {
        res.json({
            message: "Algo salió mal",
            data: {}
        })
    }
}


module.exports = {
    getRolUserById
}