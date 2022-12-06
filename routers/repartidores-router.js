const express = require('express');
const router = express.Router();
const repartidor = require('../models/repartidor');

// Obteniendo todos los repartidores
router.get('/', (req, res) => {
    repartidor.find()
    .then( (result) => {
        res.send(result);
        res.end();
    } )
    .catch( (error) => {
        res.send(error);
        res.end();
    } )
});

// Obtener un repartidor
router.get('/:id', (req,res) => {
    repartidor.findOne({_id: req.params.id})
    .then( (result) => {
        res.send(result);
        res.end();
    } )
    .catch( (error) => {
        res.send(error);
        res.end();
    } )

    console.log('Mostrando un repartidor');
});

// Crear un repartidor
router.post('/', (req, res) => {
    let newRepartidor = new repartidor({
        nombre: req.body.nombre,
        nameUser: req.body.nameUser,
        pass: req.body.pass
    });

    newRepartidor.save()
    .then( (result) => {
        res.send(result);
        res.end();
    } )
    .catch( (error) => {
        res.send(error);
        res.end();
    } )

    console.log('Insertando nuevo repartidor');

});

// Actualizar repartidor
router.put('/:id', (req, res) => {
    repartidor.updateOne(
        {
            _id: req.params.id
        },
        {
            nombre: req.body.nombre,
            nameUser: req.body.nameUser,
            pass: req.body.pass
        }
    ).then( (result) => {
        res.send(result);
        res.end();
    } )
    .catch( (error) => {
        res.send(error);
        res.end();
    } )
});

// Eliminar repartidor
router.delete('/:id', (req, res) => {
    repartidor.deleteOne(
        {
            _id: req.params.id
        }
    ).then( (result) => {
        res.send(result);
        res.end();
    } )
    .catch( (error) => {
        res.send(error);
        res.end();
    } )
})

module.exports = router;