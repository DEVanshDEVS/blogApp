//1. import model
const Post = require("../models/postModel");

exports.createPost = async (req, res) => {
    try{
        const {title, body} = req.body;
        const post = new Post({
            title, body,
        });
        const savedPost= await post.save();

        res.json({
            post:savedPost,
        });
    }
    catch(error){
        return res.status(500).json({
            error:"Error while creating post",
        });
    }
};

//function to get all posts
exports.getAllPosts= async (req, res) => {
    try{
        const posts = await Post.find().populate("comments").exec();
        //if we want all the likes and comments instead of their IDs we use this one
        //const posts = await Post.find().populate("likes").populate("comments").exec();
        res.json({
            posts,
        })
    }
    catch(error){
        return res.status(500).json({
            error:"Error while fetching all post",
        });
    }
};
