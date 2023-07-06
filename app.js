const express = require('express');
const bodyParser = require('body-parser');

const etudiantRoutes = require('./routes/etudiantRoutes');

const app = express();

app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/etudiant', etudiantRoutes);


// router controller

app.listen(3000);