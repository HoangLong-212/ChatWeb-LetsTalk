var users = []
const User = require('./models/user')
const messageController = require('./service/message')

const SocketServer = (socket, io) => {

    socket.on('signin', async (data) => {
        const id = data
        const user = await users.find(user => user.userId == id)
        if (!user) {
            users.push({
                userId: id,
                socketId: socket.id,
            })
            console.log('Users: ')
            console.log(users)
        }
        const userData = await User.findById(id).populate('guilds').populate('channels')
        userData.channels.forEach(channel => {
            socket.join(channel._id.toString())
        });
        userData.guilds.forEach(guild => {
            guild.channels.forEach(channel => {
                socket.join(channel._id.toString())
            });
        });
        //console.log(socket)
    })

    // socket.on('test',(data) => {
    //     const {roomId} = data
    //     io.to(roomId).emit('test','test')
    // })

    // socket.on('join-room',(data) => {
    //     const {roomId} = data
    //     socket.join(roomId)
    //     console.log('join-room' + roomId)
    // })

    // socket.on('editClients', (data) => {
    //     const { targetId } = data
    //     const client = clients.find(client => client.socketId == socket.id)
    //     const target = clients.find(client => client.userId == targetId)
    //     console.log('clients: ')
    //     console.log(clients)
    //     if (target) {
    //         console.log('edit: ')
    //         clients = EditClients(clients, client.userId, target.userId, status.onConnect)
    //     }
    //     console.log('--------------clients: ')
    //     console.log(clients)

    // })

    socket.on('message', async (data) => {
        console.log(data)
        const {timestamp, content, isImage, channel_id} = data
        //author, timestamp, content, isImage, channel_id
        const userSocket = await users.find(user => user.socketId == user.id)
        const mess = await messageController.addMessage(sender, timestamp, content, isImage, channel_id)
        console.log(mess)
        const roomId = channel_id
        io.to(`${roomId}`).emit('message',({mess}));
        //io.to(`${target.socketId}`).to(`${socket.id}`).emit('message', ({ ...data, senderId: sender.userId }))
    })

////////////-- disconnect --//////////////

    socket.on('logout', async () => {
        const user = await users.find(user => user.socketId == socket.id)
        if (!user) {
            return;
        }
        users.splice(users.indexOf(client), 1);
        console.log(users)
        console.log('logout socket')
    })

}

module.exports = SocketServer