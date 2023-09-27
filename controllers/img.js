const { request, response } = require('express');
const ImageModel = require('../models/image');
const shortID = require('shortid');

const postIMG = async (req = request, res = response) => {
    const {name, data, size, mimetype} = req.files.image;
    console.log(req.files.image)

    const newImgName = encodeURIComponent(`${shortID.generate()}-${name.trim()}`);
    const img = new ImageModel({name: newImgName, data, size, mimetype});

    const link = `${req.headers.host}/img/${newImgName}`

    try {
        await img.save();
        res.json({
            msg: 'Image uploaded successfully!',
            link
        });
    } catch (error) {
        res.status(500).json({
            error: 'An error has ocurred',
            detail: error
        });
    }

}

const getIMG = async (req = request, res = response) => {
    const img = encodeURIComponent(req.params.img);
    console.log(img)
    const imgFound = await ImageModel.findOne({name: img});

    if (!imgFound) {
        return res.status(400).json({
            error: 'Image not found'
        })
    }

    res.set('Content-Type', imgFound.mimetype);
    res.send(imgFound.data);
}

module.exports = {
    postIMG,
    getIMG
};