import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ButtonBase,
  Grid,
} from "@material-ui/core/";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import EditIcon from "@material-ui/icons/Edit";
import moment from "moment";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { likePost, deletePost } from "../../../actions/posts";
import useStyles from "./styles";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('profile')); 
  

  const openPost = () => {
    history.push(`/posts/${post._id}`);
  };

  return (
    // <ButtonBase className={classes.cardAction} onClick={openPost}>
    <Grid container item xs={12} spacing={3}>
      <Card className={classes.card} item xs={12} raised elevation={6}>
        <CardMedia
          className={classes.media}
          // image={
          //   post.selectedFile ||
          //   "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
          // }
          title={post.title}
        />
        <div className={classes.overlay}>
          <Typography variant="h6" onClick={openPost}>
            {post.name}
          </Typography>

          <Typography variant="body2">
            {moment(post.createdAt).fromNow()}
          </Typography>
        </div>

        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
        <div className={classes.overlay2}>
          <Button
            style={{ color: "white" }}
            size="small"
            onClick={() => setCurrentId(post._id)}
          >
            <EditIcon />
          </Button>
        </div>
        )}
        
        <Typography
          className={classes.title}
          gutterBottom
          variant="h5"
          component="h2"
          onClick={openPost}
        >
          {`Q.` + post.title}
        </Typography>

        <CardContent className={classes.overlay3}>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            onClick={openPost}
          >
            {post.message}
          </Typography>
        </CardContent>

        <div className={classes.details}>
          <Typography
            variant="body2"
            color="textSecondary"
            component="h2"
            onClick={openPost}
          >
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
        </div>

        <CardActions className={classes.cardActions}>
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(likePost(post._id))}
          >
            <ThumbUpAltIcon fontSize="small" /> &nbsp; Like &nbsp;{" "}
            {post.likeCount}{" "}
          </Button>

          {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
            <Button
              size="small"
              color="primary"
              onClick={() => dispatch(deletePost(post._id))}
            >
              <DeleteIcon fontSize="small" /> Delete
            </Button>
          )}
        </CardActions>
      </Card>
    </Grid>
    //  </ButtonBase>
  );
};

export default Post;
