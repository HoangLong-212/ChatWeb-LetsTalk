var users = [];
const user = require("./models/user");
const User = require("./models/user");
const messageService = require("./service/message");
const userService = require("./service/user");

const SocketServer = (socket, io) => {
  socket.on("signin", async (data) => {
    const id = data;
    var user = await users.find((user) => user.userId == id);
    if (!user) {
      user = {
        userId: id,
        socketId: socket.id,
      };
      users.push(user);
      console.log("Users: ");
      console.log(users);
    } else {
      user.socketId = socket.id;
      console.log("Users:: ");
      console.log(users);
    }
    await userService.setStatus(user.userId, "Online");
    const userData = await User.findById(id)
      .populate("guilds")
      .populate("channels");
    userData.channels.forEach((channel) => {
      socket.join(channel._id.toString());
    });
    userData.guilds.forEach((guild) => {
      // socket.join(guild._id.toString());
      guild.channels.forEach((channel) => {
        socket.join(channel._id.toString());
      });
    });
  });

  socket.on("message", async (data) => {
    console.log(data);
    const { timestamp, content, isImage, channel_id } = data;
    //author, timestamp, content, isImage, channel_id
    const sender = await users.find((user) => user.socketId == socket.id);
    const user = await User.findById(sender.userId).populate("");
    const avtAuthor = await userService.getAvatar(user._id);
    const mess = await messageService.addMessage(
      user._id,
      timestamp,
      content,
      isImage,
      channel_id
    );
    var data = {
      _id: mess._id,
      authorId: user._id,
      authorName: user.username,
      authorFakeId: user.id_fake,
      avatarUrlAuthor: avtAuthor.imageUrl,
      timestamp: mess.timestamp,
      content: mess.content,
      isImage: mess.isImage,
      channel_id: channel_id,
    };
    console.log("channel_id", channel_id, data);
    io.to(`${channel_id}`).emit("message", { data });
  });

  socket.on("messageInRoom", async (data) => {
    const { timestamp, content, isImage, channel_id } = data;
    const sender = await users.find((user) => user.socketId == socket.id);
    const user = await User.findById(sender.userId).populate("");
    const avtAuthor = await userService.getAvatar(user._id);

    var data = {
      _id: mess._id,
      authorId: user._id,
      authorName: user.username,
      authorFakeId: user.id_fake,
      avatarUrlAuthor: avtAuthor.imageUrl,
      timestamp: timestamp,
      content: content,
      isImage: isImage,
    };
    console.log(data);
    io.in(`${channel_id}`).emit("messageInRoom", { data });
  });

  socket.on("userConnectCall", async (guildId) => {
    console.log("long", users);
    console.log("room", guildId);
    console.log("soket", socket.id);
    const user = await users.find((user) => user.socketId == socket.id);
    // socket.on("ready", () => {
    //   io.to(`${guildId}`).emit("userConnectCall", user.userId);
    // });
    // const user = await users.find((user) => user.socketId == socket.id);
    io.to(`${guildId}`).emit("userConnectCall", user.userId);
  });

  ////////////-- disconnect --//////////////

  socket.on("logout", async () => {
    const user = await users.find((user) => user.socketId == socket.id);
    if (!user) {
      return;
    }
    await userService.setStatus(user.userId, "Invisible");
    users.splice(users.indexOf(client), 1);
    console.log(users);
    console.log("logout socket");
  });
};

module.exports = SocketServer;
