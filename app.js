const { request } = require('express');
const { response } = require('express');
const express = require('express');
const app =express();
const mysql =require('mysql');

require("dotenv").config();


app.use(express.json());
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

connection.connect((err)=>{
    if (err) throw err;
    console.log('Connected to database');
})


app.get('/',(req,res)=>{
    res.send("hello world");
});

app.listen(3000,()=>{
    console.log('servidor en puerto 3000...')
});
