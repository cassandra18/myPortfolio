const express = require('express');
const routes = express.Router();
const createContact = require('../controllers/contactControllers');

routes('/contact').post(createContact);

module.exports = routes;