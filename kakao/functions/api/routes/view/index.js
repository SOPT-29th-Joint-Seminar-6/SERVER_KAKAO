const express = require('express');
const router = express.Router();

router.get('/viewthumb', require('./viewthumbGET'));
router.get('/viewfind', require('./viewfindGET'));
module.exports = router;