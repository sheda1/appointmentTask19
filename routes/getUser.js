
const path = require('path');
const express = require('express');

// const mysql = require('mysql2');

const db = require('../util/database');


const router = express.Router();

router.get('/get',(req,res,next) => {
    db.execute('SELECT * FROM user')
    .then(result => res.json(result[0]))
    .catch(err => console.log(err)); 
})

module.exports = router;