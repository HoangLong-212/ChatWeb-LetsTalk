const mongoose = require('mongoose')

const Guild = require('../models/guild')
const User = require('../models/user')
const imageController = require('../controllers/image');

exports.createGuild = async (req, res) => {
    const id = req.userId
    const {serverName} = req.body
    //create 2 channel default 'GUILD_VOICE' and 'GROUP_DM' push to 'channels'
    try {
        const user = User.findById(id)
        const newGuild = new Guild({
            _id: new mongoose.Types.ObjectId(),
            name: serverName,
            author: user,
        })
        if(req.file != undefined){
            const image = await imageController.upload(req.file.path)
            newGuild.avatar = image
        }
        await newGuild.save()
        return res.status(200).json({
            success: true,
            message: 'create guild',
            newGuild
        })
        
    } catch (error) {
        return res.status(201).json({
            success: false,
            message: 'create guild err',
        })
    }

}