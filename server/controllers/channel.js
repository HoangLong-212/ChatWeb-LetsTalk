const Channel = require('../models/channel')

exports.getOneById = async (req,res)=>{
    const id = req.params.id
    try {
        const channel = await Channel.findById(id).populate('messages')
        if (channel) {
            return res.status(200).json({
                success: true,
                message: 'get one channel by id',
                channel
            })
        }
        return res.status(201).json({
            success: false,
            message: 'get one channel by id',
        })
    } catch (error) {
        console.log("err get one channel by id")
    }
}