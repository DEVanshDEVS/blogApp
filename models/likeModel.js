//1. import mongoose
const mongoose = require("mongoose");

//2. route handler
const likeSChema = new mongoose.Schema({
    //the like Schema contains - post and,
    //the user itself:
    post:{
        //this means that post is storing a ID
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post", //refernce to post model
    },
    user:{
        type:String,
        required:true,
    },
});

//3.export
module.exports = mongoose.model("Like", likeSChema);