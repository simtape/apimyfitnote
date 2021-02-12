const mongoose = require('mongoose');

const GoalSchema = mongoose.Schema({
    status: {
        type: [Boolean],
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