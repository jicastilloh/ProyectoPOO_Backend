const express = require('express');
const router = express.Router();
const cena = require('../../models/comidas-models/cenas');

// Obteniendo todos los cenas
router.get('/', (req, res) => {
    cena.find()
    .then( (result) => {
        res.send(result);
        res.end();
    } )
    .catch( (error) => {
        res.send(error);
        res.end();
    } )

    console.log('Mostrando todas las cenas');
});

// Crear una cena
router.post('/', (req, res) => {
    let newCena = new cena({
        nombre: req.body.nombre,
        precio: req.body.precio
    });

    newCena.save()
    .then( (result) => {
        res.send(result);
        res.end();
    } )
    .catch( (error) => {
        res.send(error);
        res.end();
    } )

    console.log('Insertando nueva cena');

});

// Actualizar cena
router.put('/:id', (req, res) => {
    cena.updateOne(
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

    console.log('Actualizando cena');
});

// Eliminando una cena
router.delete('/:id', (req, res) => {
    cena.deleteOne({ _id: req.params.id })
    .then( (result) => {
        res.send(result);
        res.end();
    } )
    .catch( (error) => {
        res.send(error);
        res.end();
    } )

    console.log('Eliminando cena');
})

module.exports = router;