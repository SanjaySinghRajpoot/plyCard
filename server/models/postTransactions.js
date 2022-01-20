import mongoose from "mongoose";

// Basic message structure
const postSchema = mongoose.Schema({
  name: String,
  selectedFile: String, // image or any other file 
  type: String,
  ammount: Number,
  symbole: String,
});

var PostTransaction = mongoose.model("PostTransaction", postSchema);

export default PostTransaction;
