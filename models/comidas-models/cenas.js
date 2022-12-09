const mongoose = require('mongoose');

const esquemaCenas = new mongoose.Schema({
    nombre: String,
    precio: Number,
});

module.exports = mongoose.model('cena', esquemaCenas);