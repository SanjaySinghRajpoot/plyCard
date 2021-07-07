import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import useStyles from "../../../styles";
import DelteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from './styles';

const Post = ({ post }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography varient="h6">{post.creator}</Typography>
        <Typography varient="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      
      <div className={classes.overlay2}>
         <Button style={{color:'white'}} size="small" onClick={ () => {}}>
           <MoreHorizIcon fontSize="default" />
         </Button>
      </div>
      
      <div className={classes.details}>
        <Typography varient="body2" color="textSecondary">{post.tags.map((tag) => `#${tag}`)}</Typography> 
      </div>
      <CardContent>
      <Typography className={classes.title} variant="h5" gutterBottom>{post.message}</Typography> 
      </CardContent>
      <CardActions className={classes.CardActions}>
        <Button size="small" color="primary" onClick={() => {}}>
         <ThumbUpAltIcon fontSize="small"/> 
         Like
         {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={() => {}}>
         <DelteIcon fontSize="small"/> 
        </Button>
      </CardActions>

    </Card>
  );
};

export default Post;
