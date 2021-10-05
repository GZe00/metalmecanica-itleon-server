// import Router from "express";
const {Router} = require("express")
const { getAllUser, getUserById, createUser, updateUser, deleteUser } = require("../controllers/user.controller");
const {getRolUserById} = require("../controllers/rol.controller")

const router = Router();


//Users

router.post("/users", createUser);
router.get("/users", getAllUser);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

//Roles

router.get("/rol", getRolUserById);




module.exports = router;