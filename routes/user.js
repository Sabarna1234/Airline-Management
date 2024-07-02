const express= require("express")
const {handelGetAllFlights, handleCreateFlight} = require("../controllers/user")
const router=express.Router()


router.route("/").get(handelGetAllFlights).post(handleCreateFlight)

module.exports=router