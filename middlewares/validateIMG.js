const validateIMG = async (req, res, next) => {
    const image = req.files?.image

    if (!image) {
        return res.status(400).json({
            error: 'Image cant be empty'
        });
    } else {
        //validate mimetype
        const mimetypeRegExp = /(^image)(\/)[a-zA-Z0-9_]*/gm
    
        if (!mimetypeRegExp.test(image.mimetype)) {
            return res.status(400).json({
                error: 'Invalid image file'
            });
        }

        //validate size (max 4MB)
        if (image.size > 4000000) {
            return res.status(400).json({
                error: 'Image size cant be larger than 4MB'
            })
        }

        next();
    }
}

module.exports = validateIMG