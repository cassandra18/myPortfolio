const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
// const mysql = require('mysql');
const connectDB = require('./db');
const createContact = require('./controllers/contactControllers');
const errorHandler = require('./errorHandler')
require('colors');

//connect to database
connectDB();

const port  = process.env.PORT || 3000;
const app = express();
app.use(cors());

//Middleware to parse url-encoded form data
//extended: true allows parsing of rich objects and arrays encoded in the url-encoded format
app.use(bodyParser.urlencoded({ extended: true }));

//parse incoming json data
app.use(bodyParser.json());

app.use('/submit', createContact);

// Backend start link
app.get('/', (req, res) => {

    res.send('Welcome to My Blog App Backend side');

});
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`.blue);
  });

