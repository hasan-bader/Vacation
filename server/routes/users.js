const express = require("express");
const router = express.Router();
const UserController = require("../controllers/usersController");

/* POST NEW USER. */
router.post("/addnew", UserController.addNewUser);

router.post("/login", UserController.loginUser);

module.exports = router;
