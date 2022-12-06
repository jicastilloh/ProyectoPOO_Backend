const express = require('express');
const router = express.Router();
const administrador = require('../models/administrador')

// Obteniendo todos los administradores
router.get('/', (req, res) => {
    administrador.find()
    .then( (result) => {
        res.send(result);
        res.end();
    } )
    .catch( (error) => {
        res.send(error);
        res.end();
    } )

    console.log('Mostrando todos los administradores');
});

// Obtener un administrador
router.get('/:id', (req,res) => {
    administrador.findOne({_id: req.params.id})
    .then( (result) => {
        res.send(result);
        res.end();
    } )
    .catch( (error) => {
        res.send(error);
        res.end();
    } )

    console.log('Mostrando un administrador');
});

// Crear un administrador
router.post('/', (req, res) => {
    let newAdmin = new administrador({
        nombre: req.body.nombre,
        nameUser: req.body.nameUser,
        pass: req.body.pass
    });

    newAdmin.save()
    .then( (result) => {
        res.send(result);
        res.end();
    } )
    .catch( (error) => {
        res.send(error);
        res.end();
    } )

    console.log('Insertando nuevo administrador');

});

// Actualizar administrador
router.put('/:id', (req, res) => {
    administrador.updateOne(
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

// Eliminar administrador
router.delete('/:id', (req, res) => {
    administrador.deleteOne(
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