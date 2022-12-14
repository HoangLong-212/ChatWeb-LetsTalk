const express = require('express')
const router = express.Router()

const imageController = require('../controllers/image')

router
    .route('/:imageId')
    .get(imageController.getUrl)


module.exports = router