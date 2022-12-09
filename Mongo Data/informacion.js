// Documentos de administradores
db.administradores.insertMany([
    {
        "nombre": "Silvia",
        "nameUser": "silvi12",
        "pass": "perro45"
    },
    {
        "nombre": "Evelyn",
        "nameUser": "cll22",
        "pass": "nieve"
    },
    {
        "nombre": "paloma",
        "nameUser": "paloe21",
        "pass": "navidad"
    }
]);

// Documentos de clientes
db.clientes.insertMany([
    {
        "nombre": "Lionel",
        "apellido": "Messi",
        "email": "messi@gmail.com",
        "nameUser": "messiuser",
        "pass": "messipass"
    },
    {
        "nombre": "Bernardo",
        "apellido": "Silva",
        "email": "bernardo@gmail.com",
        "nameUser": "beruser",
        "pass": "berpass"
    },
    {
        "nombre": "Damian",
        "apellido": "Aceituno",
        "email": "dami@gmail.com",
        "nameUser": "damiuser",
        "pass": "damipass"
    }
]);

// Documentos de repartidores
db.repartidores.insertMany([
    {
        "nombre": "Cinthia",
        "nameUser": "cinti22",
        "pass": "cintipass"
    },
    {
        "nombre": "Claudia",
        "nameUser": "claudiauser",
        "pass": "claudiapass"
    },
    {
        "nombre": "Carmen",
        "nameUser": "carmenuser",
        "pass": "carmenpass"
    }
]);

// Documentos de desayunos
db.desayunos.insertMany([
    {
        "nombre": "Aguacate asado con queso mozarella",
        "precio": 110
    },
    {
        "nombre": "Tortilla rápida con hierbas frescas",
        "precio": 55
    },
    {
        "nombre": "Panesillos bajos en hidratos con queso crema",
        "precio": 70
    },
    {
        "nombre": "Mini muffin queto de arándanos",
        "precio": 40
    }
]);

// Documentos de almuerzos
db.almuerzos.insertMany([
    {
        "nombre": "Ensalada de pollo a la parrilla",
        "precio": 130
    },
    {
        "nombre": "Arroz cocido con coliflor",
        "precio": 70
    },
    {
        "nombre": "Espagueti de calabaza",
        "precio": 150
    },
    {
        "nombre": "Mini embolturas de lechuga con camarones",
        "precio": 200
    }
]);

// Documentos de cenas
db.cenas.insertMany([
    {
        "nombre": "Huevos al horno con calabacin",
        "precio": 100
    },
    {
        "nombre": "Pizza queto con base de pollo",
        "precio": 170
    },
    {
        "nombre": "Ensalada ligera de atún",
        "precio": 150
    },
    {
        "nombre": "Crema de brocoli y mascarpone",
        "precio": 60
    }
]);

// Documentos de bebidas
db.bebidas.insertMany([
    {
        "nombre": "Té verde helado o frío",
        "precio": 40
    },
    {
        "nombre": "Tizana tropical",
        "precio": 80
    },
    {
        "nombre": "Batido verde con verdura y fruta de su elección",
        "precio": 80
    },
    {
        "nombre": "Jugo de col DETOX",
        "precio": 95
    },
    {
        "nombre": "Jugo de aloe vera",
        "precio": 82
    }
]);