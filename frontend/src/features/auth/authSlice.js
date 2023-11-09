import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import authService from "./authService";

const kullanici=JSON.parse(localStorage.getItem('kullanici'))

const initialState={
    kullanici:kullanici ? kullanici : null, //var ise kullanici yoksa null
    isHata:false,
    isBasari:false,
    isYukleniyor:false,
    mesaj:''
}



export const register=createAsyncThunk('auth/register',async(user,thunkAPI)=>{
  try {
      
      return await authService.register(user) //autservıce ıcınde regıster var bu kullancıı bılgısını ıstıy

  } catch (error) {
      const mesaj=(error.response && error.response.data && error.response.data.message) || error.message 
  || error.toString()

      return thunkAPI.rejectWithValue(mesaj) //hata varsa donduruuyoruz
  }
})




export const login=createAsyncThunk('auth/login',async(user,thunkAPI)=>{

    try {
    
  return await authService.login(user)//aldı auth service kullanıcı data user olarak gelcek axios post calıstırıcak postta sıkıntı yoksa 
  //localstroge bılgıyı bu user ıle doldurucaz
    } catch (error) {
        const mesaj=(error.response && error.response.data && error.response.data.message) || error.message 
    || error.toString()
  
        return thunkAPI.rejectWithValue(mesaj) //hata varsa donduruuyoruz
    }






})



export const logout=createAsyncThunk('auth/logout',async ()=>{
    await authService.logout() //autservıce logout calıstırdık
})

export const authSlice=createSlice({
  name:'auth',
  initialState,
  reducers:{
      reset:(state)=>{ //dolduktan sonra ilk haline donsun
          state.isHata =false
          state.isYukleniyor=false
          state.isBasari=false
          state.mesaj=''
      }
  },




  extraReducers:(builder)=>{
    builder
        .addCase(register.pending,(state)=>{
            state.isYukleniyor=true
        })
        .addCase(register.fulfilled,(state,action)=>{
            state.isYukleniyor=false
            state.isBasari=true
            state.kullanici=action.payload
        })
        .addCase(register.rejected,(state,action)=>{
            state.isYukleniyor=false
            state.isHata=true
            state.mesaj=action.payload
            state.kullanici=null
        })


        .addCase(login.pending,(state)=>{
            state.isYukleniyor=true
        })
        .addCase(login.fulfilled,(state,action)=>{
            state.isYukleniyor=false
            state.isBasari=true
            state.kullanici=action.payload
        })
        .addCase(login.rejected,(state,action)=>{
            state.isYukleniyor=false
            state.isHata=true
            state.mesaj=action.payload
            state.kullanici=null
        })
        .addCase(logout.fulfilled,(state)=>{
      
            state.kullanici=null //cıkıs ıslemı ıcın kulalnıcıyı nulaldık logout calıdtıgında olsun dıger turlu olmuyo cıkıs
        })
}





});

export const {reset}=authSlice.actions 
export default authSlice.reducer
