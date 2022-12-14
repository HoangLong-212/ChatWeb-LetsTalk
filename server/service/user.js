const mongoose = require('mongoose')

const User = require('../models/user')

exports.getOne

exports.getAvatar = async (id) => {
    try {
        const user = await User.findById(id).populate('avatar')
        if(user){
            const avt = user.avatar
            return avt
        }
        return null
    } catch (error) {
        console.log('err get avatar')
    }
}