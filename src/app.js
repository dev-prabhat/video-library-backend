import express from 'express'
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express()

app.use(cors({  // cors setting 
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: '20kb'})) // configure to take data in to form of json
app.use(express.urlencoded({extended:true, limit: '20kb'})) // configure to take data from url
app.use(express.static('public')) // configure to store some data like images, favicon in public file
app.use(cookieParser())

export default app