const { v2 } = require('cloudinary');

const cloudinary = v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET,
    secure: true 
});

const options = {
    folder: 'devChallenges/img-uploader-master',
    use_filename: true
}

module.exports = {
    cloudinary,
    options
};