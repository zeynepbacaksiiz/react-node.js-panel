import asyncHandler from "express-async-handler";
import mongoose from "mongoose"
import Yetenek from "../models/yetenekModel.js";



export const MemoryGet=asyncHandler(async (req, res) => {
    try {
        const memories = await Yetenek.find()
    
        res.status(200).json(memories)
      } catch (error) {
        res.status(404).json({ message: error.message })
      }
  });
  
  export const Veri=asyncHandler(async (req, res) => {
    try {
        const { id } = req.params
    
        if (!mongoose.Types.ObjectId.isValid(id))
          res.status(404).json({ message: 'Memory id is not valid' })
    
        const memory = await Yetenek.findById(id)
        if (!memory) return
    
        res.status(200).json(memory)
      } catch (error) {
        res.status(404).json({ message: 'Memory not found' })
      }
  });
  

export const PostMemory=asyncHandler(async (req, res) => {
    try {
        const memory = req.body
    
        const createdMemory = await Yetenek.create({
          ...memory,
          creatorId: req.creatorId,
        })
    
        res.status(201).json(createdMemory)
      } catch (error) {
        console.log(error.message)
        res.json({ message: 'Create memory failed' })
      }
});


export const DeleteMemory=asyncHandler(async (req, res) => {
  try {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id))
      res.status(404).json({ message: 'Memory id is not valid' })

    const oldMemory = await Yetenek.findById(id)
    if (req.creatorId !== oldMemory.creatorId) return res.sendStatus(403)

    await Yetenek.findByIdAndDelete(id)

    res.status(200).json({ message: 'Memory has been deleted' })
  } catch (error) {
    console.log(error.message)
    res.json({ message: 'Memory delete failed' })
  }
});
export const UpdateMemory=asyncHandler(async (req, res) => {
    try {
        const { id } = req.params
    
        if (!mongoose.Types.ObjectId.isValid(id))
          res.status(404).json({ message: 'Memory id is not valid' })
    
        const oldMemory = await Yetenek.findById(id)
        if (req.creatorId !== oldMemory.creatorId) return res.sendStatus(403)
    
        const {yetenek} = req.body
    
        const a = await Yetenek.findByIdAndUpdate(
          id,
          {  yetenek, _id: id },
          { new: true }
        )
    
        res.status(200).json(a)
      } catch (error) {
        console.log(error.message)
        res.json({ message: 'Update failed' })
      }
});
