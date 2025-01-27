const mongoose=require("mongoose")
const flightSchema= new mongoose.Schema({
    flightName:{
        type:String,
        required:true,
    },
    flightNumber:{
        type:String,
        required:true,
        unique:true,
    },
    arrivalDate:{
        type:String,
        required:true,
    },
    arrivalTime:{
        type:String,
        required:true,
    },
    arrivalCity:{
        type:String,
        required:true,
    },
    departureDate:{
        type:String,
        required:true,
    },
    departureTime:{
        type:String,
        required:true,
    },
    departureCity:{
        type:String,
        required:true,
    },
    totalTimeofJourney:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
        min:0,
    },
},
{timestamps:true},
)
const Flight= mongoose.model("Flight",flightSchema)
module.exports = Flight