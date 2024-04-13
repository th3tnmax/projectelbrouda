
const mongoose = require('mongoose');

const User = mongoose.model('User', {

    id:{
        type:Number,
        //required:true,
        default:0,
        min:0,
    },
    name: {
        type : String,
        required:true
    },
    lastname: {
        type : String,
        required:true
    },
    birthDate:{
        type:Date,
        //required:true
    },
    tel:{
        type:Number,
        //required:true,
    },
    email: {
        type : String
    },
    password: {
        type : String
    },
    url:{
        type:String,
        //required:true,
        default:"",
    },
    subscriber: {
        type : Boolean,
        //required:true,
        default:false
    },
    follower :{
        type : Boolean,
        //required:true,
        default:false
    },
    teacher: {
        type : Boolean,
        //required:true,
        default:false
    },
    admin : {
        type : Boolean,
        //required:true,
        default:false
    },
    
    
})

module.exports = User;