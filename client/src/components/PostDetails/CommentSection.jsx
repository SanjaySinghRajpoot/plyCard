import React, { useState, useRef } from 'react';
import { Typography, TextField, Button } from '@material-ui/core/';
import { useDispatch } from 'react-redux';


import useStyles from "./styles";
import { commentPost } from '../../actions/posts'; 

const CommentSection = ({ post }) => {
  console.log(post);
  const classes = useStyles();
  const [comments, setComments] = useState(post?.comments);
  const [comment, setComment] = useState("");
  const user = JSON.parse(localStorage.getItem('profile'));   // get the user from local storage
  const dispatch = useDispatch();
  const commentsRef = useRef();

  // const handleClick = () => {
  //     const finalComment = `${user.result.name}: ${comment}`;

  //     dispatch(commentPost(finalComment, post._id));
  // };
  
 

  const handleComment = async () => {
    const newComments = await dispatch(commentPost(`${user?.result?.name}: ${comment}`, post._id));

    setComment('');
    setComments(newComments);

    commentsRef.current.scrollIntoView({ behavior: 'smooth' });
  
    window.location.reload();
  };


  return (
    <div>
    <div className={classes.commentsOuterContainer}>
      <div className={classes.commentsInnerContainer}>
        <Typography gutterBottom variant="h6">Comments</Typography>
        {comments?.map((c, i) => (
          <Typography key={i} gutterBottom variant="subtitle1">
            <strong>{c.split(': ')[0]}</strong>
            {c.split(':')[1]}
          </Typography>
        ))}
        <div ref={commentsRef} />
      </div>
      <div style={{ width: '70%' }}>
        <Typography gutterBottom variant="h6">Write a comment</Typography>
        <TextField fullWidth rows={4} variant="outlined" label="Comment" multiline value={comment} onChange={(e) => setComment(e.target.value)} />
        <br />
        <Button style={{ marginTop: '10px' }} fullWidth disabled={!comment.length} color="primary" variant="contained" onClick={handleComment}>
          Comment
        </Button>
      </div>
    </div>
  </div>
  );
};

export default CommentSection;
