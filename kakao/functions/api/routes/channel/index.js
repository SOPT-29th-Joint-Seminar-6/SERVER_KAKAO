const express = require('express');
const router = express.Router();

router.get('/:id', require('./channelGET'));

module.exports = router;