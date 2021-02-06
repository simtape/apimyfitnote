const mongoose = require('mongoose');

const GoalSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    obbiettivo: {
        type: Int16Array,
        required: false
    },
    valore_attuale: {
        type: Int16Array,
        required: false
    },
    stato: {
        type: Boolean,
        required: true
    },
    id_user: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Goals', GoalSchema);