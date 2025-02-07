const authService = require("../services/auth_service");
const jwtUtils = require("../utils/jwt_utils");
const passport = require("passport");

const { validationResult } = require("express-validator");

class AuthController {
    static async register(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                const error = new Error(errors.array()[0].msg);
                error.statusCode = 400;
                throw error;
            }
            
            const { email, password } = req.body;
            const user = await authService.register({ email, password });
            req.login(user, (err) => {
                if (err) return next(err);
                res.status(201).json({ 
                  message: "User registered and logged in", 
                  user: { email : user.email}
                });
              });
        } catch (error) {
            next(error);
        }
    }

    static async login(req, res, next) {
        // passport handle authentication

            const user = req.user;
            
            res.status(200).json({ message: "User logged in successfully", user : { email : user.email } });
        
    }
}

module.exports = AuthController;