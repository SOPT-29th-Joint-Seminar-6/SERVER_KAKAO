const express =require('express')
const router = express.Router();

router.use('/channel', require('./channel'));
router.use('/view', require('./view'));

module.exports = router;