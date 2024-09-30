const mongoose=require('mongoose')
const {Schema} = mongoose
const UserSchema = new Schema({
    name:{
      type:String,
      required:true,
    },
    email:{
      type:String,
      required:true,
      unique:true
    },
    password:{
      type:String,
      required:true,
    },
    date:{
      type:Date,
      default:Date.now
    }
  });
  const User=mongoose.model('user',UserSchema)  // model name , schemma name
  // User.createIndexes();  --> this will return for unique:true  allows to take only 1 time , duplicates doesn't allows
  module.exports=User