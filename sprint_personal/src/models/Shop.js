'use strict';
const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema(
    {
        
        name : {
            type : String,
            required : [true, "주점명 필수"],
            //unique : [true, "주점명 중복 안됨"],
        },
        phone : {
            type : String,
        },
        address : {
            type : String,
        },
        time : {
            type : String,
        },
        menu : {
            type : String,
        },
        주류 : {
            type : String,
        },
        이미지 : {
            data : Buffer,
            contentType : String,
        },
        
    }, 
    {
        timestamps : true,
    },
)


module.exports = mongoose.model('Shop', UserSchema)