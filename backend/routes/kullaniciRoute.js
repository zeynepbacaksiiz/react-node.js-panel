import express from 'express'
import {RegisterKullanici,Loginkullanici,Getkullanici}  from '../controllers/kullaniciController.js'


const router=express.Router();

router.post('/',RegisterKullanici);
router.post('/login',Loginkullanici);
router.get('/kullanici',Getkullanici);


 export default router
