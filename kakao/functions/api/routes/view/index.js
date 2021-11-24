const express = require('express');
const router = express.Router();

router.get('/viewthumb', require('./viewthumbGET'));
module.exports = router;