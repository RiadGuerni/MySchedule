const AuthController = require("../controllers/auth_controller");
const passport = require("passport");
const express = require("express");
const authRouter = express.Router();



authRouter.post("/register"  ,AuthController.register);
authRouter.post("/login",AuthController.login);
module.exports = authRouter;