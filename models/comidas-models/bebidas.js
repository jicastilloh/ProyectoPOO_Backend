const mongoose = require('mongoose');

const esquemaBebidas = new mongoose.Schema({
    nombre: String,
    precio: Number,
});

module.exports = mongoose.model('bebidas', esquemaBebidas);