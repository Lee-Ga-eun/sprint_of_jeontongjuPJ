const mongoose = require('mongoose');
// const { db } = require('./Drink');


const db=require('../db');

if(db.stores.find({name:"화실"})){
  console.log("안녕하세요");   
};
