const express = require('express')
const router = express.Router()

const userController = require('../controllers/user')
const auth = require('../middleware/auth')
//const upload = require('../middleware/upload');

router
    .route('/getAll')
    .get(userController.getAll)

router
    .route('/:id/getOneById')
    .get(userController.getOneById)

router
    .route('/')
    .get(auth, userController.getOne)
    .post(userController.regiter)
    .delete(userController.deleteAll)

router
    .route('/login')
    .post(userController.logIn)

router
    .route('/friend')
    //.get(auth, userController.getListFriend)
    .post(auth, userController.addFriend)


module.exports = router