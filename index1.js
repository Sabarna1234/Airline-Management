const express= require("express")
const {connectMongoDb}= require("./connection")
const {longReqRes}= require("./middlewares/index")
const flightRouter= require("./routes/user")


const app=express()
const port=5500

connectMongoDb("mongodb://127.0.0.1:27017/flight-data")
.then(()=>console.log("MongoDb connected!"))
.catch(err => console.error("MongoDb connection error:",err))

//middleware
app.use(express.urlencoded({extended:false}))
app.use(express.json())



app.use(longReqRes("log.txt"))

app.use(express.static('public'))

app.use("/api/flight",flightRouter)


app.listen(port,()=>console.log(`server started at port:${port}`))