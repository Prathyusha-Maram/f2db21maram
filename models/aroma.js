const mongoose = require("mongoose") 
const aromaSchema = mongoose.Schema({ 
 aroma_name: String, 
 brand: String, 
 price: Number 
}) 
 
module.exports = mongoose.model("Aroma", aromaSchema)