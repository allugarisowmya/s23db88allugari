const mongoose = require("mongoose")
const houseSchema = mongoose.Schema({
houseName: String,
price: Number,
description: String
})
module.exports = mongoose.model("house",
houseSchema)