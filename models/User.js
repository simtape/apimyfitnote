const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
   name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true, 
        unique: true
    },
    weight: {
        type: String,
        required: true
    },
    height: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }  
})

module.exports = mongoose.model('Users', UserSchema);