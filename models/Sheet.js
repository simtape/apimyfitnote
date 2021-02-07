const mongoose = require('mongoose');
const SheetSchema = mongoose.Schema({
    exercises: [String],
    days: [String],
    reps: [Number],
    series: [Number],
    date: { type: Date, default: Date.now },
    name_sheet: String,
    user_id: String

})
module.exports = mongoose.model('Sheets', SheetSchema);
