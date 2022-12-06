const mongoose = require('mongoose');

const esquemaRepartidor = new mongoose.Schema({
    nombre: String,
    nameUser: String,
    pass: String
});

module.exports = mongoose.model('repartidore', esquemaRepartidor);