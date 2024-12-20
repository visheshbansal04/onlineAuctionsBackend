

const express = require('express');
const { fetchCustomers } = require('../controllers/customerController');
const { getCustomer } = require('../controllers/authController');
const router = express.Router();

router.get('/all',fetchCustomers);
router.get("/:email",getCustomer);

module.exports = router;
