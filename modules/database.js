const mongoose = require('mongoose');

const db = 'deprisa';
const port = '27017';
const host = '127.0.0.1';

class Database{

    constructor(){
        this.conectar();
    }

    conectar(){
        mongoose.connect(`mongodb://${host}:${port}/${db}`, {useNewUrlParser: true})
        .then( result => console.log('Se conectó a la base de datos'))
        .catch( error => console.log(error));

        mongoose.connection.on('error', (e) => {
            console.log(e);
        })
    }

}

module.exports = new Database();