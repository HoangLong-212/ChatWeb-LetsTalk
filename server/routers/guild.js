const express = require('express')
const router = express.Router()

const guildController = require('../controllers/guild')
const auth = require('../middleware/auth')
const upload = require('../middleware/upload');

router
    .route('/createGuild')
    .post(auth, upload.single("avatar"), guildController.createGuild)
