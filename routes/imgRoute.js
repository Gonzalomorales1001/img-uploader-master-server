const { Router } = require('express');

const { postIMG, getIMG } = require('../controllers/img');

const router = Router();

router.post('/upload', postIMG);
router.get('/:img', getIMG);

module.exports = router;