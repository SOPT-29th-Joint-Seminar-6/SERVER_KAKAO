const express = require('express');
const router = express.Router();

router.get('/:id', require('./channelGET'));
router.post('/', require('./channelPOST'))

module.exports = router;