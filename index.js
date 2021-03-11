const app = require("./server.js")

const port = process.env.PORT || 1234

app.listen(port,()=>{
    console.log(`server alive on port ${port}`)
})

