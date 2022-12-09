const express = require('express');
const cors = require('cors');
const database = require('./modules/database');
const clientesRouter = require('./routers/clientes-router');
const repartidorRouter = require('./routers/repartidores-router');
const administradorRouter = require('./routers/administradores-router');

// comidas
const desayunoRouter = require('./routers/comidas-routers/desayunos-router');
const almuerzoRouter = require('./routers/comidas-routers/almuerzos-router');
const cenaRouter = require('./routers/comidas-routers/cenas-router');
const bebidaRouter = require('./routers/comidas-routers/bebidas-router');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Usando las rutas de usuarios
app.use('/clientes', clientesRouter);
app.use('/repartidors', repartidorRouter);
app.use('/administradors', administradorRouter);

// Usando rutas de comidas
app.use('/desayunos', desayunoRouter);
app.use('/almuerzos', almuerzoRouter);
app.use('/cenas', cenaRouter);
app.use('/bebidas', bebidaRouter);

app.get('/', (req, res) => {
    res.send('Bienvenido');
    res.end();
})

app.listen(3000, () => {
    console.log('Servidor levantado');
})