import express from 'express'

import {MemoryGet,PostMemory,DeleteMemory,UpdateMemory,Veri}  from '../controllers/logoController.js'



const router = express.Router()
router.get('/logo',MemoryGet);
router.get('/logo/:id',Veri);
router.post('/logo',PostMemory);
router.delete('/logo/:id',DeleteMemory);
router.put('/logo/:id',UpdateMemory);


export default router
