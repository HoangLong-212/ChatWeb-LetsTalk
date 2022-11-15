const mongoose = require('mongoose')

const Channel = require('../models/channel')
//const Message = require('../models/message')

exports.createChannelDefault = async (userId, type) => {
    try {
        const newChannel = new Channel({
            _id: new mongoose.Types.ObjectId(),
            name: 'General',
            type: type,
        })
        await newChannel.members.push(userId)
        await newChannel.save()
        return newChannel
    } catch (error) {
        console.log('err create channel')
    }
}

exports.createChannel = async (name, members, type) => {
    try {
        const newChannel = new Channel({
            _id: new mongoose.Types.ObjectId(),
            name: name,
            type: type,
            members: members,
        })
        await newChannel.save()
        return newChannel
    } catch (error) {
        console.log('err create channel')
    }
}

exports.addMember = async (userId, channelId) => {
    try {
        const channel = await Channel.findById(channelId)
        channel.members.push(user)
        await channel.save()
    } catch (error) {
        console.log('err add member')
    }
}