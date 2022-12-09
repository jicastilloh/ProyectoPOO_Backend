const express = require('express');
const router = express.Router();
const bebida = require('../../models/comidas-models/bebidas');

// Obteniendo todas las bebidas
router.get('/', (req, res) => {
    bebida.find()
    .then( (result) => {
        res.send(result);
        res.end();
    } )
    .catch( (error) => {
        res.send(error);
        res.end();
    } )

    console.log('Mostrando todas las bebidas');
});

// Crear una bebida
router.post('/', (req, res) => {
    let newBebida = new bebida({
        nombre: req.body.nombre,
        precio: req.body.precio
    });

    newBebida.save()
    .then( (result) => {
        res.send(result);
        res.end();
    } )
    .catch( (error) => {
        res.send(error);
        res.end();
    } )

    console.log('Insertando nueva bebidas');

});

// Actualizar bebida
router.put('/:id', (req, res) => {
    bebida.updateOne(
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

    console.log('Actualizando bebida');
});

// Eliminando una cena
router.delete('/:id', (req, res) => {
    bebida.deleteOne({ _id: req.params.id })
    .then( (result) => {
        res.send(result);
        res.end();
    } )
    .catch( (error) => {
        res.send(error);
        res.end();
    } )

    console.log('Eliminando bebida');
})

module.exports = router;