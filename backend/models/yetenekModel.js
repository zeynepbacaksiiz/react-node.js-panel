import mongoose from "mongoose";

const memoSchema = mongoose.Schema({

  yetenek:{
    type:String,
    required: true,
  },
  createdAt:{
    type:Date,
    default:new Date()
  }
})
const Yetenek=mongoose.model('yetenek',memoSchema)
export default Yetenek
