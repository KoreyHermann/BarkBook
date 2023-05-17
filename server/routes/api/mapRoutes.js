const express = require('express');
const router = express.Router();
const mapController = require('../controllers/mapController');

// GET /api/map
router.get('/', mapController.getMapData);

module.exports = router;
