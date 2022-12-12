const mongoose = require('mongoose')

const Guild = require('../models/guild')
const Channel = require('../models/channel')
const User = require('../models/user')
const imageService = require('../service/image');
const channelService = require('../service/channel')

exports.getOneById = async (req, res) => {
    const id = req.params.id
    try {
        const guild = await Guild.findById(id)
            .populate('avatar','imageUrl')
            .populate('members',['username','emotion','status','avatar','id_fake'])
            .populate('channels',['name','type'])
        if (guild) {
            return res.status(200).json({
                success: true,
                message: 'get one guild by id',
                guild
            })
        }
        return res.status(201).json({
            success: false,
            message: 'get one guild by id',
        })
    } catch (error) {
        console.log("err get one guild by id")
    }
}

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
        } else {
            newGuild.avatar = await imageService.getAvtGuildDefault()
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
    const { newServerName } = req.body
    const idGuild = req.params.guildId
    try {
        const guild = await Guild.findById(idGuild)
        guild.name = newServerName
        guild.save()
        res.status(200).json({
            success: true,
            message: 'rename guild',
            guild
        })
    } catch (error) {
        console.log('err rename guild')
    }
}
exports.createChannel = async (req, res) => {
    const { nameChannel, type } = req.body
    const idGuild = req.params.guildId
    try {
        const guild = await Guild.findById(idGuild)
        const channel = await channelService.createChannel(nameChannel, guild.members, type)
        guild.channels.push(channel._id)
        guild.save()
        return res.status(200).json({
            success: true,
            message: 'Create channel',
            guild
        })
    } catch (error) {
        console.log('err create channel')
    }
}

exports.deleteGuild = async (req, res) =>{
    const id = req.userId
    const idGuild = req.params.guildId
    try {
        const guild = await Guild.findById(idGuild)


        res.status(200).json({
            success: true,
            message: 'Delete guild',
            guild
        })

    } catch (error) {
        console.log('err delete guild')
    }
}
