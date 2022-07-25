
const path = require('path');
const express = require('express');

// const mysql = require('mysql2');

const db = require('./util/database');

const app = express();

const cors = require('cors');

app.use(cors());

const bodyParser = require('body-parser');

const insertRoute = require('./routes/insert');

const getUserRoute = require('./routes/getUser');





// app.use(bodyParser.urlencoded({extended : false}));

app.use(express.json());

app.use(insertRoute);

app.use(getUserRoute);





app.listen(3000);