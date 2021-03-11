const express = require("express")
const server = express()
const dotenv = require("dotenv").config()
const cors = require("cors")

server.use(cors())
server.use(express.json())


server.get("/",(req,res)=>{
    res.status(200).json("api is up")
})

server.use("/api/*",(_,res)=>{
    res.json({
        data:"API is working"
    })
})


module.exports = server