const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    "title":{
        type:String,
        require:true
    },
    "isbn": {
        type:String,
        require:true
    },
    "author":{
        type:String,  
        require:true
    },
    "publisher":{
        type:String,
        require:true
    },
    "genre":{
        type:String,
        require:true

    },
    "price":{
        type:Number,
        require:true
    },
    "stock":{
        type:Number,
        require:true
    },
    "description":{
        type:String,
        require:true
    },
    "cover":{
        type:String,
        default:""
    }
},
    {timestamp:true});

    module.exports = mongoose.model("Book", BookSchema)