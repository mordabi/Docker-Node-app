const express = require('express');
const bodyParser = require('body-parser');
const { urlencoded } = require('express');

module.exports =(app)=>{
    app.use(express.json());
    app.use(bodyParse.json());
    app.use(urlencoded({extended:false}));
}