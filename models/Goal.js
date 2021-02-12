const mongoose = require('mongoose');

const GoalSchema = mongoose.Schema({
    name: {
        type: [String],
        required: true
},
    obiettivo: {
        type: [String]
    },
    valore_attuale: {
        type: [String]
    },
    id_user: {
        type: String,
  
    }
})

module.exports = mongoose.model('Goals', GoalSchema);