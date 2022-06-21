const mongoose = require("mongoose");
const tableSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
})

module.exports =  mongoose.model("table_user", tableSchema, "table_collection");