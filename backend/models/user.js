
const mongoose = require('mongoose');

const User = mongoose.model('User', {
    name: {
        type : String
    },
    lastname: {
        type : String
    },
    age: {
        type : Number
    },
    email: {
        type : String
    },
    password: {
        type : String
    },
    subscriber: {
        type : Boolean
    },
    follower :{
        type : Boolean
    },
    teacher: {
        type : Boolean
    },
    admin : {
        type : Boolean
    }
    
})

module.exports = User;