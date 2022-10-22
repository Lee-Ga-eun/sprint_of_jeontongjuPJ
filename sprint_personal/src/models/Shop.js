'use strict';
const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema(
    {
        
        이름 : {
            type : String,
            required : [true, "주점명 필수"],
            unique : [true, "주점명 중복 안됨"],
        },
        전화번호 : {
            type : String,
        },
        주소 : {
            type : String,
        },
        영업시간 : {
            type : String,
        },
        메뉴 : {
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