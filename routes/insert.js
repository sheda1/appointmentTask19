
const path = require('path');
const express = require('express');

// const mysql = require('mysql2');

const db = require('../util/database');

const router = express.Router();

router.post('/insert',(req,res,next) => {
        const email11 = req.body.email;
        const name11 = req.body.name;
        

        db.execute('INSERT INTO user (Name,Email) VALUES (?,?)',
        [name11,email11])
        .then((result) => 
                res.json({name: name11,email:email11}))
                
        .catch((err) => console.log(err));

})

module.exports = router;