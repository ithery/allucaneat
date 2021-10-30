const express = require('express');
const router = express.Router();
const ctrl = require('../../../controllers/avatar.js');

router.get('/github', ctrl.github);
router.get('/gravatar', ctrl.gravatar);
router.get('/initial', ctrl.initial);

module.exports = router;

/**
 * upload.single('avatar') - avatar is a name which specified in UI Form 'name' attribute
 */
