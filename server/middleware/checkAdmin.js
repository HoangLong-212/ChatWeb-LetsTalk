module.exports = async (req, res, next) => {
    const id = req.userId
    const idGuild = req.guildId
    try {
        if (guild.author == id) {
            guild.name = newServerName
        }
        req.userId = decoded.userId
        next()
    }
    catch (error) {
        console.log(error)
        return res.status(401).json({
            success: false,
            message: "Auth failed due to token missing"
        })
    }
}