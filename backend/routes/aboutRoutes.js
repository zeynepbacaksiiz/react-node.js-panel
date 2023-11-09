import express from 'express'

import {MemoryGet,PostMemory,DeleteMemory,UpdateMemory,Veri}  from '../controllers/aboutController.js'



const router = express.Router()
router.get('/hakkimda',MemoryGet);
router.get('/hakkimda/:id',Veri);
router.post('/hakkimda',PostMemory);
router.delete('/hakkimda/:id',DeleteMemory);
router.put('/hakkimda/:id',UpdateMemory);


export default router
