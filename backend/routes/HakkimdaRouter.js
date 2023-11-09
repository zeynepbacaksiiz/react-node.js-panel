import express from 'express'
import mongoose from 'mongoose'
import Hakkimda from '../db/hakkimdaModel.js'

const router = express.Router()

//Get all memories from db

router.get('/hakkimda', async (req, res) => {
  try {
    const memories = await Hakkimda.find()

    res.status(200).json(memories)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
})

//Get single memory from db

router.get('/hakkimda/:id', async (req, res) => {
  try {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id))
      res.status(404).json({ message: 'Memory id is not valid' })

    const memory = await Hakkimda.findById(id)
    if (!memory) return

    res.status(200).json(memory)
  } catch (error) {
    res.status(404).json({ message: 'Memory not found' })
  }
})

//Create a memory

router.post('/hakkimda', async (req, res) => {
  try {
    const memory = req.body

    const createdMemory = await Hakkimda.create({
      ...memory,
      creatorId: req.creatorId,
    })

    res.status(201).json(createdMemory)
  } catch (error) {
    console.log(error.message)
    res.json({ message: 'Create memory failed' })
  }
})

//Update a memory

router.put('/hakkimda/:id', async (req, res) => {
  try {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id))
      res.status(404).json({ message: 'Memory id is not valid' })

    const oldMemory = await Hakkimda.findById(id)
    if (req.creatorId !== oldMemory.creatorId) return res.sendStatus(403)

    const { hakkimda, image} = req.body

    const Hakkinda = await Hakkimda.findByIdAndUpdate(
      id,
      { hakkimda, image, _id: id },
      { new: true }
    )

    res.status(200).json(Hakkinda)
  } catch (error) {
    console.log(error.message)
    res.json({ message: 'Update failed' })
  }
})

//Delete a memory

router.delete('/hakkimda/:id', async (req, res) => {
  try {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id))
      res.status(404).json({ message: 'Memory id is not valid' })

    const oldMemory = await Hakkimda.findById(id)
    if (req.creatorId !== oldMemory.creatorId) return res.sendStatus(403)

    await Hakkimda.findByIdAndDelete(id)

    res.status(200).json({ message: 'Memory has been deleted' })
  } catch (error) {
    console.log(error.message)
    res.json({ message: 'Memory delete failed' })
  }
})

export default router