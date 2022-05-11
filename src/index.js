const { request } = require('express');
const { response } = require('express');
const express = require('express');
const app = express();
const path = require('path');
const mysql =require('mysql');

require("dotenv").config();

//SETTINGS
app.use(express.json());
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

connection.connect((err)=>{
    if (err) throw err;
    console.log('Connected to database');
});

//RUTAS
app.use(require('./routes/index'));

//STATIC
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});