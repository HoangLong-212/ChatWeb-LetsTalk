<<<<<<< Updated upstream
// const mongoose = require('mongoose')
// const Image = require('../models/image')
// const cloudinary = require('../middleware/cloudinary')

// exports.getAvtUserDefault = async () => {
//     return await Image.findOne({ imageId: '001' })
// }

// exports.getAvtGuildDefault = async () => {
//     return await Image.findOne({ imageId: '002' })
// }


// exports.upload = async (path) => {

//     try {
//         const result = await cloudinary.uploader.upload(path);
//         const image = new Image({
//             _id: new mongoose.Types.ObjectId(),
//             imageId: result.public_id,
//             imageUrl: result.secure_url,
//         })
//         await image.save()
//         return image
//     } catch (error) {
//         console.log(error)
//     }
// }

// exports.destroyImage = async (image) => {
//     try {
//         await Image.findOne({ _id: image._id }).remove()
//         await cloudinary.uploader.destroy(image.imageId)
//         return true;
//     } catch (error) {
//         console.log(error);
//         return false;
//     }
// }

// exports.getUrl = async (id)=>{
//     try {
//         const image = await Image.findById(id)
//         return image.imageUrl
//     } catch (error) {
//         console.log(error)
//     }
// }
=======
const imageService = require('../service/image');

exports.getUrl = async (req, res)=>{
    const id = req.params.id
    try {
        const imageUrl = await imageService.getUrl(id)
        if(imageUrl){
            return res.status(200).json({
                success: true,
                message: 'get image url by id',
                imageUrl
            })
        }
        return res.status(201).json({
            success: false,
            message: 'get image url by id',
        })
    } catch (error) {
        console.log('err get image url by id')
    }
}
>>>>>>> Stashed changes
