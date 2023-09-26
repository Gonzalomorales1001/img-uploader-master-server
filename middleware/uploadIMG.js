const multer = require('multer');
const shortid = require('shortid');

const validMimeTypes = [
    'image/jpg',
    'image/png',
    'image/jpeg',
    'image/webp',
    'image/gif'
]

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'tmp')
    },
    filename: function (req, file, cb) {
        cb(null, `${file.originalname.split('.')[0]}-${shortid.generate()}.${file.mimetype.split('/')[1]}`);
    }
});

const fileFilter = function (req, file, cb){
        if (validMimeTypes.includes(file.mimetype)) {
            cb(null, true)
        } else {
            cb(new Error('file type not supported.'))
        }
    }

const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 8000000
    }
});

module.exports = upload;