import mongoose from "mongoose";

const tokenSchema=mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    
        refleshToken:{
            type:String,
        
    },
})
const tokenModel=mongoose.model('token',tokenSchema)

export default tokenModel