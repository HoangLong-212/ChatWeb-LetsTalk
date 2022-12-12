const express = require('express')
const router = express.Router()

const channelController = require('../controllers/channel')

router
    .route('/:id')
    .get(channelController.getOneById)

module.exports = router
