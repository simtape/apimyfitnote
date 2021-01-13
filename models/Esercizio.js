const mongoose = require('mongoose');
const ExercisesSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    attrezzi:{
        type: String,
        required: true
    }
    

  
})
module.exports = mongoose.model('Exercises', ExercisesSchema);

