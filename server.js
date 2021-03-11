const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const cors = require("cors")

app.use(cors())
app.use(express.json())


app.get("/",(req,res)=>{
    res.status(200).json("api is up")
})

app.use("/api/*",(_,res)=>{
    res.json({
        data:"API is working"
    })
})


module.exports = app