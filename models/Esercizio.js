const mongoose = require('mongoose');

//mongoose.set('useCreateIndex', true);
const ExercisesSchema = mongoose.Schema({
    nome: {
        index:'text',
        type: String,
        required: true
    },
    attrezzi:{
        index:'text',
        type: String,
        required: true
    }
    

  
})
//ExercisesSchema.index({nome:'text', attrezzi:'text'});
module.exports = mongoose.model('Exercises', ExercisesSchema);

