const express = require('express');
const router = express.Router();

router.use('/channel', require('./channel'));

module.exports = router;