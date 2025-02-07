 const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EventSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    startTime: { type: Date, required: true }
    , endTime: { type: Date, required: true }});
    
    const Event = mongoose.model('Event', EventSchema);
module.exports = {
    EventSchema,
     Event
};