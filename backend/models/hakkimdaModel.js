import mongoose from "mongoose";

const memoSchema = mongoose.Schema({
  
  hakkimda: {
    type: String,
    required: true,
  },
  image:{
    type:String
  },
  createdAt:{
    type:Date,
    default:new Date()
  }
})
const Hakkimda=mongoose.model('hakkimda',memoSchema)
export default Hakkimda
