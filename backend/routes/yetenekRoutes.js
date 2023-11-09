import express from 'express'

import {MemoryGet,PostMemory,DeleteMemory,UpdateMemory,Veri}  from '../controllers/skillsController.js'



const router = express.Router()
router.get('/yetenek',MemoryGet);
router.get('/yetenek/:id',Veri);
router.post('/yetenek',PostMemory);
router.delete('/yetenek/:id',DeleteMemory);
router.put('/yetenek/:id',UpdateMemory);


export default router
