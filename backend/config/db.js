
import mongoose from 'mongoose'

const Baglan=async()=>{
    try{const conn=await mongoose.connect(process.env.MONGO_URI)
    console.log(`MONGO DB BAGLANDI -->${conn.connection.name}`)
    }
    catch(error){
    console.log(error);
}
}
export default Baglan