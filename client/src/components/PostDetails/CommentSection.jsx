import React, { useState, useRef } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import { commentPost } from '../../actions/posts'; 

const CommentSection = ({ post }) => {
  console.log(post);
  const classes = useStyles();
  const [comments, setComments] = useState([1, 2, 2, 4, 5]);
  const [comment, setComment] = useState("");
  const user = JSON.parse(localStorage.getItem('user'));   // get the user from local storage
  const dispatch = useDispatch();

  const handleClick = () => {
      const finalComment = `${user.result.name}: ${comment}`;

      dispatch(commentPost(finalComment, post._id));
  };

  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        <div className={classes.commentsInnerContainer}>
          <Typography gutterBottom variant="h6">
            Comments
          </Typography>
          {comments.map((c, i) => (
            <Typography key={i} gutterBottom variant="subtitle1">
              Comment{i}
            </Typography>
          ))}
        </div>
        <div style={{ width: "70%" }}>
          <Typography gutterBottom variant="h6">
            Type a commment
          </Typography>
          <TextField
            fullWidth
            rows={4}
            variant="outlined"
            label="Comment"
            multiline
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button
            style={{ marginTop: "10px" }}
            fullwidth
            disabled={!comment}
            variant="contained"
            onClick={handleClick}
            color="primary"
          >
           Comment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
