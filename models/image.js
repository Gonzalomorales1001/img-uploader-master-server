const { Schema, model } = require('mongoose');

const imgSchema = Schema({
    name: {
        type: 'String',
        required: [true, 'image is required']
    },
    data: {
        type: Buffer,
        required: [true, 'image data is required']
    },
    size: {
        type: Number
    },
    mimetype: {
        type: 'string'
    }
});

const Image = model('Image', imgSchema);

module.exports = Image;