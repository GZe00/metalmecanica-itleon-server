// import Router from "express";
const { Router } = require("express");
const rolController= require("../controllers/rol.controller");

const router = Router();

//Rol

router.post("/roles", rolController.createRol);
router.get("/roles", rolController.getAllRol);
router.get("/roles/:id", rolController.getRolById);
router.put("/roles/:id", rolController.updateRol);
router.delete("/roles/:id", rolController.deleteRol);

router.get("/roles/:id/users", rolController.userRol);

module.exports = router;
