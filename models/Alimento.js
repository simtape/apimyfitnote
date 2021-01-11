const mongoose = require('mongoose');

const AlimentoSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    kcal: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Aliment', AlimentoSchema);