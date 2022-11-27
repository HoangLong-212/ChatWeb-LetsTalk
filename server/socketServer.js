var users = []
const User = require('./models/user')

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
        console.log(socket)
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
        const sender = await clients.find(client => client.socketId == socket.id)
        const roomId = data
        io.to(`${target.socketId}`).to(`${socket.id}`).emit('message', ({ ...data, senderId: sender.userId }))
    })

////////////-- disconnect --//////////////

    socket.on('logout', async () => {
        // const client = await clients.find(client => client.socketId == socket.id)
        // if (!client) {
        //     return;
        // }
        // if(client.status == status.onConnect){
        //     userOnConnects.splice(userOnConnects.indexOf(client), 1)
        // }
        // clients.splice(clients.indexOf(client), 1);
        // console.log(clients)
        // console.log('logout socket')

    })

}

module.exports = SocketServer