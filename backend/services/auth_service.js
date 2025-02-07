const User = require('../models/user');
const Day = require('../models/day');
const hashUtils = require('../utils/hash_utils');

class AuthService {
    // singleton pattern
    constructor() {
        if (AuthService.instance) {
            return AuthService.instance;
        }
        AuthService.instance = this;
        return this;
    }

    async register({ email, password }) {
        const hashedPassword = await hashUtils.hashPassword(password);

        const user = await User.findOne({ email });
        if (user) {
            const error = new Error("User already exists");
            error.status = 409;
            throw error;
        } else {
            const newUser = new User({
                email,
                password: hashedPassword,
            });
            await newUser.save();
            return newUser;
        }
    }

    async login({ email, password }) {
        const user = await User.findOne({ email });
        if (!user) {
            const error = new Error("User not found");
            error.status = 404;
            throw error;
        }
        const passwordMatch = await hashUtils.comparePassword(password, user.password);
        if (!passwordMatch) {
            const error = new Error("Wrong password");
            error.status = 401;
            throw error;
        }
        return user;
    }

    async findUserById(id) {
        try {
            const user = await User.findById(id);
            if (!user) {
                const error = new Error("User not found");
                error.status = 404;
                throw error;
            }
            return user;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new AuthService();

