const User = require('../models/user');
const History = require('../models/history');
const hashUtils = require('../utils/hash_utils');
class AuthService{
    // singleton pattern
    constructor () {
        if (AuthService.instance){
            return AuthService.instance;
        }
        AuthService.instance = this ;
        return this ;
    }
    async register({username , password}){
        const hashedPassword = await hashUtils.hashPassword(password);
 
    const user = await User.findOne({username});
    if (user) {
        throw new Error("User already exists");
    }
    else {
        const history=  new History( {events : []});
        await history.save();
        const newUser = new User({
            username,
            password : hashedPassword,
            historyRef : history._id
        });
        await newUser.save();
        return newUser;
     
    }

}

async login ( {username , password}){
    const user = await User.findOne({username});
    if (!user) {
        throw new Error("User not found");
    }
    const passwordMatch = await hashUtils.comparePassword(password, user.password);
    if (!passwordMatch) {
        throw new Error("Wrong password");
    }
    return user;
}

}

module.exports = new AuthService();

