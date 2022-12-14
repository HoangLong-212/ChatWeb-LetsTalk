const imageService = require('../service/image');

exports.getUrl = async (req, res)=>{
    const id = req.params.imageId
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
