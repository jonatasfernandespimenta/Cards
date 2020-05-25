const mongoose = require('mongoose');

const Habits = new mongoose.Schema({
    name: String,
    description: String
});

module.exports = mongoose.model('habits', Habits);
