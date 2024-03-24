const express = require('express')
const ConnectMongoDb = require("./connection")
const router = require('./Routes/url');
const PORT = 8000

const app = express()

ConnectMongoDb("mongodb://127.0.0.1:27017/UrlShortner")

app.use(express.json())

app.use(router)


app.listen(PORT,()=>{
    console.log(`PORT connected at ${PORT}`)
})

