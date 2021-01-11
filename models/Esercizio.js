const mongoose = require('mongoose');
const ExercisesSchema = mongoose.Schema({
    name_exercises: {
        type: String,
        required: true,
        unique: true
    },
    tutorial:{
        type: String,
        required: true
    }, 
  
})
module.exports = mongoose.model('Exercises', ExercisesSchema);

