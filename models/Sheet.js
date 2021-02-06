const mongoose = require('mongoose');
const SheetSchema = mongoose.Schema({
    exercises: [String],
    days: [String],
    reps: [Number],
    series: [Number],
    user_id: String
})
module.exports = mongoose.model('Sheets', SheetSchema);
