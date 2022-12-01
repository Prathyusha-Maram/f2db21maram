const mongoose = require("mongoose") 
const aromaSchema = mongoose.Schema({ 
 aroma_name: {type: String,required: [true, 'Aroma name cannot be empty']},
 brand: {type: String,required: [true, 'Aroma brand cannot be empty']},
 price: {type: Number,required: [true, 'Aroma price cannot be empty']},
}) 
 
module.exports = mongoose.model("Aroma", aromaSchema)