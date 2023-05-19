const express = require('express');
const router = express.Router();
const petFinderController = require('../controllers/petFinderController');

router.get('/', petFinderController.getPets);

module.exports = router;
