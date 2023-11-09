import mongoose from "mongoose";

const memoSchema = mongoose.Schema({

  image:{
    type:String,
    required: true,
  },
  createdAt:{
    type:Date,
    default:new Date()
  }
})
const Logo=mongoose.model('logo',memoSchema)
export default Logo
