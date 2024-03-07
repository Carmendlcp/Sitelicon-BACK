const express = require("express");
const router = express.Router();
const { createUser, updateUser, deleteUser, getAllUsers }  = require("../Controllers/user.controller");

router.get("/", getAllUsers);
// router.get("/:id", UserController.getUserById);
router.post("/create", createUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

module.exports = router;

