const mongoose = require('mongoose');

const esquemaAdministrador = new mongoose.Schema({
    nombre: String,
    nameUser: String,
    pass: String
});

module.exports = mongoose.model('administradore', esquemaAdministrador);