const express = require('express')
const router = express.Router()

const userController = require('../controllers/user')
const auth = require('../middleware/auth')
//const upload = require('../middleware/upload');

router
    .route('/getAll')
    .get(userController.getAll)

router
    .route('/')
    .get(auth, userController.getOne)
    .post(userController.register)
    .delete(userController.deleteAll)

router
    .route('/login')
    .post(userController.logIn)

module.exports = router