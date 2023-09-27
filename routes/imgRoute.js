const { Router } = require('express');

const { postIMG, getIMG } = require('../controllers/img');
const validateIMG = require('../middlewares/validateIMG');

const router = Router();

router.post('/upload', validateIMG, postIMG);
router.get('/:img', getIMG);

module.exports = router;