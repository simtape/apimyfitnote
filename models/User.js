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
    age: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    height: {
        type: String,
        required: true
    },
    sheet: [
        {
        exercises:{
            name:
            {
                type: [String],
                required: true
            },
            series:{
                type: [Number],
                required: true
    
            },
            reps:{
                type: [Number],
                required: true
    
            }
        },
        days:{ 
            type: [String],
            required: true
        },
  }]
     
})

module.exports = mongoose.model('Users', UserSchema);