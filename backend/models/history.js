const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { EventSchema } = require('./event');
const HistorySchema = new Schema({
    events: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }]
});
const History = mongoose.model('History', HistorySchema);
module.exports = History;