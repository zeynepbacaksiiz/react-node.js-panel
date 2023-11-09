
import React,{useState,useEffect} from 'react'
import {FaUser} from 'react-icons/fa'
import {useSelector,useDispatch} from 'react-redux'
import {useNavigate} from "react-router-dom"
import {toast} from 'react-toastify'
import {register,reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
const Register = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const {kullanici,isHata,isBasari,isYukleniyor,mesaj}=useSelector(state=>state.auth)
    
    const [formData,setFormData]=useState({
        kullaniciAd:'',
        email:'',
        parola:'',
        parolaKontrol:''
    })
    const {kullaniciAd,email,parola,parolaKontrol}=formData 
    const onChange=(e)=>{ //her degısıklıkte method calıstıtırcaz
        setFormData((onceki)=>({ //oncekı verıyı aldık 
            ...onceki,
            [e.target.name]:e.target.value //değişikliği yakaladık yanı name kısmı nameden geldı ve hangı ınput degıstıyse
        }))
    }
    
    const onSubmit=(e)=>{
        e.preventDefault()
        //console.log(formData);
    
        if(parola !==parolaKontrol){
            toast.error('Parolalar eşleşmedi')
        }else{
            const userData={
                kullaniciAd,email,parola
            }
    
            dispatch(register(userData))
        }
    }
    
    useEffect(()=>{

        if(isHata){
            toast.error(mesaj) //hatya girmedıyse
        }
    
        if(isBasari || kullanici){ //basarıya girmedıyse
            navigate('/')
        }
 
    
        dispatch(reset()) //hata varsa sıfırladık resetledık
    
    },[kullanici,isHata,isBasari,mesaj,navigate,dispatch])
    if(isYukleniyor){
        <Spinner/>
    }
  return (
  <>
      <section className='heading'>
            <h1>
                <FaUser/> Üyelik Oluştur
            </h1>
      </section>
      <section className='form'>

        <form onSubmit={onSubmit}>
            <div className='form-group'>
                <input type="text" className='form-control'  id="kullaniciAd" name="kullaniciAd" value={kullaniciAd} 
				placeholder="Kullanıcı Adını Giriniz" onChange={onChange} />
            </div>

            <div className='form-group'>
                <input type="email" className='form-control'  id="email" name="email" value={email} 
				placeholder="Emailinizi Giriniz" onChange={onChange} />
            </div>

            <div className='form-group'>
                <input type="password" className='form-control'  id="parola" name="parola" value={parola} 
				placeholder="Parolanızı Giriniz" onChange={onChange} />
            </div>

            <div className='form-group'>
                <input type="password" className='form-control'  id="parolaKontrol" name="parolaKontrol" 
				value={parolaKontrol} 
				placeholder="Parolanızı Tekrar Giriniz" onChange={onChange} />
            </div>


            <div className='form-group'>
                <button type='submit' className='btn btn-block'>Üye Ol</button>
            </div>
            
        </form>

      </section>
  </>
  )
}

export default Register
