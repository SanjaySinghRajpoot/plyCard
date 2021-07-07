import React, { useState, useEffect } from "react";
import { TextField, Button, Paper, Typography } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "../../styles";
import { createPost, updatePost } from "../../actions/posts";

// GET THE CURRENT ID

const Form = (currentId, setCurrentId) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);   
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if(post){
      setPostData(post);
    }
  }, [post])


  const handleSubmit = (e) => {
    e.preventDefault();

    if(currentId){
       dispatchEvent(updatePost(currentId, postData)); 
    } else {
      dispatch(createPost(postData));
    }
  };

  const clear = () => {

  }


  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography varient="h6">{currentId ? 'Editing': "Creatinng a memory"}</Typography>
        <TextField
          name="creator"
          varient="outlined"
          label=" Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          varient="outlined"
          label=" title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          varient="outlined"
          label=" message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          varient="outlined"
          label="tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          type="submit"
        >
          Submit
        </Button>
        <Button
        className={classes.buttonSubmit}
        variant="contained"
        color="primary"
        size="small"
        onClick={clear}
        fullWidth
      >
        Submit
      </Button>
      </form>
    </Paper>
  );
};

export default Form;
