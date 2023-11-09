
//models altına kullaniciModel.js dosyasını oluşturalım

import  mongoose from 'mongoose'


const kullaniciSchema=mongoose.Schema({
    kullaniciAd:{
        type:String,
        required:[true,"Lütfen kullanıcı ad giriniz"]
    },
    email:{
        type:String,
        required:[true,"Lütfen email giriniz"],
        unique:true
    },
    parola:{
        type:String,
        required:[true,"LÜtfen parola giriniz"]
    }
},{
    timestamps:true
})

const Kullanici=mongoose.model('Kullanicis',kullaniciSchema)
export default Kullanici

