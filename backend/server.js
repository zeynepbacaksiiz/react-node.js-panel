import express from 'express'
import cors from 'cors'
import Baglan from './config/db.js'
import dotenv from 'dotenv'
import Kullanici from './routes/kullaniciRoute.js'
import Memories from './routes/memoryRouter.js'
import Hakkimda from './routes/aboutRoutes.js'
import Logo from './routes/logoRoutes.js'
import Yetenek from './routes/yetenekRoutes.js'

dotenv.config()

const PORT=process.env.PORT
const app=express()

app.use(express.json({limit:'20mb'}))
 app.use(cors())



app.use("/api/kullanicilar",Kullanici)
app.use("/api/memories",Memories)
app.use("/api/hakkimda",Hakkimda)
app.use("/api/logo",Logo)
app.use("/api/yetenek",Yetenek)
app.listen(PORT,()=>console.log(`Server ${PORT} üzerinden yayında `))
Baglan()
