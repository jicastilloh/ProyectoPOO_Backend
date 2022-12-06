const express = require('express');
const router = express.Router();
const cliente = require('../models/cliente');

// Obtener todos los clientes
router.get('/', (req, res) => {
    cliente.find()
    .then( (result) => {
        res.send(result);
        res.end();
    } )
    .catch( (error) => {
        res.send(error);
        res.end();
    } )

    console.log('Mostrando todos los usuarios');

})

// Obtener un cliente
router.get('/:id', (req,res) => {
    cliente.findOne({_id: req.params.id})
    .then( (result) => {
        res.send(result);
        res.end();
    } )
    .catch( (error) => {
        res.send(error);
        res.end();
    } )

    console.log('Mostrando un cliente');
});

// Crear un cliente
router.post('/', (req, res) => {
    let newClient = new cliente({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        nameUser: req.body.nameUser,
        pass: req.body.pass
    });

    newClient.save()
    .then( (result) => {
        res.send(result);
        res.end();
    } )
    .catch( (error) => {
        res.send(error);
        res.end();
    } )

    console.log('Insertando nuevo cliente');

});

// Actualizar cliente
router.put('/:id', (req, res) => {
    cliente.updateOne(
        {
            _id: req.params.id
        },
        {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
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

// Eliminar cliente
router.delete('/:id', (req, res) => {
    cliente.deleteOne(
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