const mongoose = require('mongoose');

const esquemaCliente = new mongoose.Schema({
    nombre: String,
    apellido: String,
    email: String,
    nameUser: String,
    pass: String 
});

module.exports = mongoose.model('cliente', esquemaCliente);