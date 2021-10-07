// import Router from "express";
const {Router} = require("express")
const { getAllRol, getRolById, createRol, updateRol, deleteRol } = require("../controllers/rol.controller");


const router = Router();


//Rol

router.post("/roles", createRol);
router.get("/roles", getAllRol);
router.get("/roles/:id", getRolById);
router.put("/roles/:id", updateRol);
router.delete("/roles/:id", deleteRol);



module.exports = router;