const express = require('express')
const router = express.Router()

const guildController = require('../controllers/guild')
const auth = require('../middleware/auth')
const checkAdmin = require('../middleware/checkAdmin')
const upload = require('../middleware/upload');

router
    .route('/createGuild')
    .post(auth, upload.single("avatar"), guildController.createGuild)

router
    .route('/:guildId/rename')
    .post(auth, checkAdmin, guildController.renameGuild)

router
    .route('/:guildId/createChannel')
    .post(auth, checkAdmin, guildController.createChannel)

router
    .route('/:guildId/deleteGuild')
    .post(auth, checkAdmin, guildController.deleteGuild)

router
    .route('/:guildId/add/:memberId')
    .get(auth, checkAdmin, guildController.addMember)


module.exports = router