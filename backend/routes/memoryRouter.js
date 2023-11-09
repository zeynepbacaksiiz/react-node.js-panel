import express from 'express'

import {MemoryGet,PostMemory,DeleteMemory,UpdateMemory,Veri}  from '../controllers/memoryController.js'



const router = express.Router()
router.get('/',MemoryGet);
router.get('/:id',Veri);
router.post('/',PostMemory);
router.delete('/:id',DeleteMemory);
router.put('/:id',UpdateMemory);


 export default router