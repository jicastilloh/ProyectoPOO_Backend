const mongoose = require('mongoose');

const esquemaAlmuerzo = new mongoose.Schema({
    nombre: String,
    precio: Number,
});

module.exports = mongoose.model('almuerzo', esquemaAlmuerzo);