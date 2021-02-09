const mongoose = require('mongoose');
//const {​​ createIndexes }​​ = require('models\Alimento.js');

//mongoose.set('useCreateIndex', true);

const AlimentoSchema = mongoose.Schema({
    nome: {
        index:'text', 
        type: String,
        required: true
    },
    kcal: {
        type: Number,
        required: true
    }
})
//AlimentoSchema.index({​​ nome : "text" }​​);
module.exports = mongoose.model('Aliment', AlimentoSchema);