const mongoose = require("mongoose")
const houseSchema = mongoose.Schema({
houseName: String,
description: String,
price: { type: Number,
    min: 100,
    max: 300
  }
})
module.exports = mongoose.model("house",
houseSchema)