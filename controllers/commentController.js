//1. import model
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");
const commentModel = require("../models/commentModel");

//function define
//async-when interacting with db we dont want the main
//thread to be blocked so we use async function
exports.createComment = async (req, res) => {
    try{
        //save function is a new method:
        //fetch data from req body
        const {post, user, body} = req.body;
        //create comment object
        const comment = new Comment({
            post, user, body
        });
        //save the new comment into the database
        const savedComment = await comment.save();

        //find the post by ID and add the new comment
        //to its comments array
        const updatedPost = await Post.findByIdAndUpdate(post, {push:{comments: savedComment._id}}, {new: true})
        .populate("comments") //populate the comments array with comment doc
        .exec();

        res.json({
            post: updatedPost,
        });
    }
    catch(error){
        return res.status(500).json({
            error:"Error while creating comment",
        });
    }
};