const mongoose = require('mongoose')

const Guild = require('../models/guild')
const User = require('../models/user')
const imageService = require('../service/image');
const channelService = require('../service/channel')

exports.createGuild = async (req, res) => {
    const id = req.userId
    const { serverName } = req.body
    //create 2 channel default 'GUILD_VOICE' and 'GROUP_DM' push to 'channels'
    try {
        const user = await User.findById(id)
        const newGuild = new Guild({
            _id: new mongoose.Types.ObjectId(),
            name: serverName,
            author: user._id,
        })
        await newGuild.channels.push(await channelService.createChannelDefault(user._id, 'GUILD_DM'))
        await newGuild.channels.push(await channelService.createChannelDefault(user._id, 'GUILD_VOICE'))
        if (req.file != undefined) {
            const image = await imageService.upload(req.file.path)
            newGuild.avatar = image
        }
        await newGuild.members.push(user._id)
        await newGuild.save()
        await user.guilds.push(newGuild._id)
        await user.save()
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

exports.renameGuild = async (req, res) => {
    const id = req.userId
    const { newServerName } = req.body
    const idGuild = req.params.guildId
    try {
        const guild = await Guild.findById(idGuild)
        console.log(guild._id)
        if (guild.author == id) {
            guild.name = newServerName
            res.status(200).json({
                success: true,
                message: 'rename guild',
                guild
            })
        }
    } catch (error) {

    }
}

exports.deleteGuild = async (req, res) => {
    const id = req.userId
    const idGuild = req.params.guildId
    try {
        const guild = await Guild.findById(idGuild)
        console.log(guild._id)
        if (guild.author == id) {
            guild.name = newServerName
            res.status(200).json({
                success: true,
                message: 'rename guild',
                guild
            })
        }
    } catch (error) {
        console.log('err delete guild')
    }

}