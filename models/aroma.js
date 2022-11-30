const mongoose = require("mongoose") 
const aromaSchema = mongoose.Schema({ 
 aroma_name: {type: String,required: [true, 'Mobile type cannot be empty']},
 brand: {type: String,required: [true, 'Mobile size cannot be empty']},
 price: {type: Number,required: [true, 'Mobile cost cannot be empty']},
}) 
 
module.exports = mongoose.model("Aroma", aromaSchema)