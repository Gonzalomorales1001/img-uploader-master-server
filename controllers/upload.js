const { request, response } = require('express');
const upload = require('../middleware/uploadIMG');
const { cloudinary, options } = require('../database/cloudinary');
const { unlink } = require ('fs-extra');

const postIMG = async (req = request, res = response) => {

    const uploadSingleImage = upload.single('image');

    uploadSingleImage(req, res, async (err) => {
        if (err) {
            return res.status(400).json({
                error: "An error has ocurred",
                detail: err
            });
        }

        if (!req.file) {
            return res.status(400).json({
                error: "File cant be empty"
            });
        }

        const fileInCloud = await cloudinary.uploader.upload(req.file.path, options);

        unlink(req.file.path);
    
        res.json({
            msg: "file uploaded successfully!",
            image_url: fileInCloud.secure_url
        });
    })
}

module.exports = postIMG;