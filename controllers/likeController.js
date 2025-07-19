//1. import model
const Post = require("../models/postModel");
const Like = require("../models/likeModel");

//dunmmy
exports.dummyLink = (req, res) => {
    res.send("This is a dummy route");
};
 
//liking post
exports.likePost = async (req, res) => {
    try{
        //fetch data from the req body
        const {post, user} = req.body
        //create a new like obj and assign the val to it 
        const like  = new Like({
          post, user,  
        });
        //save the object
        const savedLike = await like.save();
        //update the post collection
        const updatedPost = await Post.findByIdAndUpdate(post, {$push:{likes:savedLike._id}}, {new:true})
        .populate("likes").exec();
        res.json({
            post:updatedPost,
        });
    }
    catch(error){
        return res.status(500).json({
            error:"Error while liking post",
        });
    }
};

//unliking post
exports.unlikePost = async (req, res) => {
    try {
        //fetch data from the req body
        const { post, user } = req.body;

        //find the like document
        const like = await Like.findOne({ post, user });

        //if like doesn't exist
        if (!like) {
            return res.status(404).json({
                error: "Like not found",
            });
        }

        //delete the like
        await Like.findByIdAndDelete(like._id);

        //update the post collection
        const updatedPost = await Post.findByIdAndUpdate(
            post,
            { $pull: { likes: like._id } },
            { new: true }
        ).populate("likes").exec();
 
        res.json({
            post: updatedPost,
        });
    } catch (error) {
        return res.status(500).json({
            error: "Error while unliking post",
        });
    }
};
