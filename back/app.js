const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')

const db = require('./util/database');
const clientRouter = require('./routes/clientRouter')

const app = express()
app.use(bodyParser.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'Get, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use(clientRouter)

db.execute('SELECT * FROM  car')
    .then(result => {
        console.log("CONNECTED");
        console.log(result[0]);
    })
    .catch(err => {
        console.log(err);
    })

app.listen(3000);

