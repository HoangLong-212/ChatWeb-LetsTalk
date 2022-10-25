const mongoose = require('mongoose')

const Channel = require('../models/channel')
const User = require('../models/user')

exports.createChannelDefault = async (req, res) => {
    const id = req.userId
    const {serverName} = req.body
    try {
        const user = User.findById(id)
        const newChannel= new Channel({
            _id: new mongoose.Types.ObjectId(),
            name: serverName,
            author: user
        })
    } catch (error) {
        
    }

    if(req.file != undefined){
        const image = await imageController.upload(req.file.path, 'avatar')
        
    }
}