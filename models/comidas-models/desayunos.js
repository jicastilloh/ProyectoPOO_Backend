const mongoose = require('mongoose');

const esquemaDesayuno = new mongoose.Schema({
    nombre: String,
    precio: Number,
});

module.exports = mongoose.model('desayuno', esquemaDesayuno);