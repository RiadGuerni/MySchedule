const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    historyRef: { type: Schema.Types.ObjectId, ref: 'History' }});
const User = mongoose.model('User', UserSchema);
module.exports = User;