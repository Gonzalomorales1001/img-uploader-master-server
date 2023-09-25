const { Router } = require('express');

const postIMG = require('../controllers/upload');

const router = Router();

router.post('/', postIMG);

module.exports = router;