const authService = require("../services/auth_service");

const passport = require("passport");

const { validationResult } = require("express-validator");

class AuthController {
    static async register(req, res,next) {
        
        try {
            const errors = validationResult(req);
            console.log(errors);
            if (!errors.isEmpty()) {
                const error = new Error(errors.array()[0].msg);
                error.statusCode = 400;
                throw error;
            }
            const { email, password } = req.body;
            const user = await authService.register({ email, password });
            req.session.userId = user._id;
            res.status(201).json({ message: "User registered successfully"});
        } catch (error) {
            next(error);
        }
    }
    static async login(req, res,next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                const error = new Error(errors.array()[0].msg);
                error.statusCode = 400;
                throw error;
            }
            const { email, password } = req.body;
            const user = await authService.login({ email, password });
            req.session.userId = user._id;
            res.status(200).json({ message: "User logged in successfully"});
        } catch (error) {
            next(error);
        }
    }
    static async (req, res)  {
        req.session.destroy(() => {
            res.json({ message: "Logged out" });
        });
    }}

module.exports = AuthController;