const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { EventSchema } = require('./event');
const DaySchema = new Schema({
    events: [{ type: EventSchema, required: true }],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    date: { type: Date, required: true }
});
const Day = mongoose.model('Day', DaySchema);
module.exports = Day;