const express = require('express');
const router = express.Router();
const desayuno = require('../../models/comidas-models/desayunos');

// Obteniendo todos los desayunos
router.get('/', (req, res) => {
    desayuno.find()
    .then( (result) => {
        res.send(result);
        res.end();
    } )
    .catch( (error) => {
        res.send(error);
        res.end();
    } )

    console.log('Mostrando todos los desayunos');
});

module.exports = router;
