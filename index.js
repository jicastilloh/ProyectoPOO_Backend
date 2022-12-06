const express = require('express');
const cors = require('cors');
const database = require('./modules/database');
const clientesRouter = require('./routers/clientes-router');
const repartidorRouter = require('./routers/repartidores-router');
const administradorRouter = require('./routers/administradores-router');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Usando las rutas
app.use('/clientes', clientesRouter);
app.use('/repartidors', repartidorRouter);
app.use('/administradors', administradorRouter);

app.get('/', (req, res) => {
    res.send('Bienvenido');
    res.end();
})

app.listen(3000, () => {
    console.log('Servidor levantado');
})