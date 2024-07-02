/*const flight= require("../models/user")

async function handelGetAllFlights(req,res){
    const origin=document.getElementById("origin")
    const destination=document.getElementById("destination")
    const Result= async function (){if(flight.find.arrivalCity==origin && flight.find.departureCity==destination){
    }
}
    return res.json(Result)
}

async function handleCreateFlight(req,res){
    const body= req.body
    if(!body||!body.flight_Name||!body.flight_Number||!body.arrival_Date||!body.arrival_Time||!body.arrival_City||!body.departure_Date||!body.departure_Time||!body.departure_City||!body.totalTimeof_Journey||!body.Price){
         return res.status(400).json({msg:"All fields are required"})
        }
        const data= await flight.create({
           flightName: body.flight_Name,
           flightNumber: body.flight_Number,
           arrivalDate: body.arrival_Date,
           arriivalTime: body.arriival_Time,
           arrivalCity: body.arrival_City,
           departureDate: body.departure_Date,
           departureTime: body.departure_Time,
           departureCity: body.departure_City,
           totalTimeofJourney:body.totalTimeof_Journey,
           price: body.Price,  
        })
         
        return res.status(201).json({msg:"success",id: data._id})
}

module.exports={
    handelGetAllFlights,
    handleCreateFlight,
}*/



const Flight = require("../models/user"); 

async function handelGetAllFlights(req, res) {
    const { origin, destination,date } = req.query;
    
    //console.log("query parameters:",{origin,destination,date})
    try {
        const flights = await Flight.find({
            arrivalCity: origin,
            departureCity: destination,
            departureDate: date,
        }).exec(); // Execute the query
         
       console.log("flights found",flights)
        return res.json({ flights });
    } catch (error) {
        console.error("Error fetching flights:", error);
        return res.status(500).json({ msg: "Internal server error" });
    }
}

async function handleCreateFlight(req, res) {
    const body = req.body;

    // Check if all required fields are provided
    const requiredFields = ['flight_Name', 'flight_Number', 'arrival_Date', 'arrival_Time', 'arrival_City', 'departure_Date', 'departure_Time', 'departure_City', 'totalTimeof_Journey', 'Price'];
    for (const field of requiredFields) {
        if (!body[field]) {
            return res.status(400).json({ msg: `Missing ${field} field` });
        }
    }

    try {
        const data = await Flight.create({
            flightName: body.flight_Name,
            flightNumber: body.flight_Number,
            arrivalDate: body.arrival_Date,
            arrivalTime: body.arrival_Time,
            arrivalCity: body.arrival_City,
            departureDate: body.departure_Date,
            departureTime: body.departure_Time,
            departureCity: body.departure_City,
            totalTimeofJourney: body.totalTimeof_Journey,
            price: body.Price
        }); 

        return res.status(201).json({ msg: "Flight created successfully", id: data._id });
    } catch (error) {
        console.error("Error creating flight:", error);
        return res.status(500).json({ msg: "Internal server error" });
    }
}

module.exports = {
    handelGetAllFlights,
    handleCreateFlight,
};
