//1. import mongoose
const mongoose = require("mongoose");

//2. route handler
const commentSchema = new mongoose.Schema({
    //the comment Schema contains - post,
    //user and the comment itself:
    post:{
        //this means that post is storing a ID
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post", //refernce to post model
    },
    user:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    }
});

//3.export
module.exports = mongoose.model("Comments", commentSchema);