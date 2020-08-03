const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'what? And my firstname?']
    },
    lastname: String,
    age: Number
})

const User = mongoose.model('User', UserSchema);

module.exports = User;