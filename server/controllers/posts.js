import PostMesage from "../models/postMessage.js";
import mongoose from "mongoose";


export const getPosts = async (req, res) => {
  
   try{
     const postMessages = await PostMesage.find();

     res.status(200).json(postMessages);
   }
   catch (error){
     res.status(404).json({message: error.message});      
   }
};

export const createPost = async(req, res) => {
  
  const post = req.body;
 
  const newPost = new PostMesage(post);

  try{
    await newPost.save();
    res.status(201).json(newPost);
    
  }catch(error){
    res.status(409).json({messsage: error.message});
    
  }

  res.send("post creation");
};

export const updatePost = async (req, res) => {

  const {id: _id} = req.params;
  const post = req.body;   // get the updated post data

  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');


  const updatedPost = await PostMesage.findByIdAndUpdate(_id, {...post, _id}, {new: true});
  
  res.json(updatedPost);  // sending back the updated post 
   
}

export const deletePost = async(req, res) =>  {
     const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');
  
     await PostMessage.findByIdAndUpdate(id);

     res.json({ message: 'Post deleted succesfuly'});
    
}