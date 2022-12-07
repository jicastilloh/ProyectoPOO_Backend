const express = require('express');
const router = express.Router();
const almuerzo = require('../../models/comidas-models/almuerzos');

// Obteniendo todos los almuerzos
router.get('/', (req, res) => {
    almuerzo.find()
    .then( (result) => {
        res.send(result);
        res.end();
    } )
    .catch( (error) => {
        res.send(error);
        res.end();
    } )

    console.log('Mostrando todos los almuerzos');
});

// Crear un almuerzo
router.post('/', (req, res) => {
    let newAlmuerzo = new almuerzo({
        nombre: req.body.nombre,
        precio: req.body.precio
    });

    newAlmuerzo.save()
    .then( (result) => {
        res.send(result);
        res.end();
    } )
    .catch( (error) => {
        res.send(error);
        res.end();
    } )

    console.log('Insertando nuevo almuerzo');

});

// Actualizar almuerzo
router.put('/:id', (req, res) => {
    almuerzo.updateOne(
        {
            _id: req.params.id
        },
        {
            nombre: req.body.nombre,
            precio: req.body.precio
        }
    ).then( (result) => {
        res.send(result);
        res.end();
    } )
    .catch( (error) => {
        res.send(error);
        res.end();
    } )

    console.log('Actualizando almuerzo');
});

// Eliminando un almuerzo
router.delete('/:id', (req, res) => {
    almuerzo.deleteOne({ _id: req.params.id })
    .then( (result) => {
        res.send(result);
        res.end();
    } )
    .catch( (error) => {
        res.send(error);
        res.end();
    } )
})

module.exports = router;