// const mongoose = require('mongoose')
// const auth = require('../middleware/auth')

// const Channel = require('../models/channel')
// const Message = require('../models/message')

// exports.createChannelDefault = async (userId, type) => {
//     try {
//         const newChannel = new Channel({
//             _id: new mongoose.Types.ObjectId(),
//             name: 'General',
//             type: type,
//             })
//         await newChannel.members.push(userId)
//         await newChannel.save()
//         return newChannel
//     } catch (error) {
//         console.log('err create channel')
//     }
// }

// exports.createChannel = async (name, members, type) => {
//     try {
//         const newChannel = new Channel({
//             _id: new mongoose.Types.ObjectId(),
//             name: name,
//             type: type,
//             members: members,
//         })
//         await newChannel.save()
//         return newChannel
//     } catch (error) {
//         console.log('err create channel')
//     }
// }

// exports.addMessage = async (data) => {
//     const {author, timestamp, channel_id, content, isImage} = data 
//     try {
//         const newMessage = new Message({
//             _id: new mongoose.Types.ObjectId(),
//             author,
//             timestamp,
//             content,
//             isImage
//         })
//         await newMessage.save()

//         const channel = await Channel.findById(channel_id)
//         await channel.messages.push(newMessage)
//         await channel.save()

//         return newMessage
//     } catch (error) {
//         console.log('err create message')
//     }
// }

