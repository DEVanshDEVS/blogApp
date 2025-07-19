//1. import mongoose
const mongoose = require("mongoose");

//2. route handler
const postSchema = new mongoose.Schema({
    //the post Schema contains - title and,
    //body, likes, comments:
    title:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Like",
    }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment",
    }]
});

//3.export
module.exports = mongoose.model("Post", postSchema);
 