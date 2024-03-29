const mongoose = require('mongoose');
const SheetSchema = mongoose.Schema({
    exercises: [String],
    days: [String],
    reps: [String],
    series: [String],
    date: { type: Date, default: Date.now },
    name_sheet: { type: String, required: true, unique: true },
    user_id: String

})
module.exports = mongoose.model('Sheets', SheetSchema);
