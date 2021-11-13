const express = require('express');
const bodyParser = require('body-parser');
const dbConnect = require('./connection/dbConnect');

const app = express();
const port = 5030;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

const routes = require('./routes/routes')(app);

const server = app.listen(port,
    () =>{
        console.log('Le server écoute les requete du port %s',port)
        dbConnect;
    });