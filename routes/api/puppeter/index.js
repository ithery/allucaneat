const express = require('express');
const router = express.Router();
const ctrl = require('../../../controllers/puppeter.js');

router.get('/capture', ctrl.capture);

module.exports = router;

/**
 * upload.single('avatar') - avatar is a name which specified in UI Form 'name' attribute
 */
