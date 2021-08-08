import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core'; 
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory } from 'react-router-dom';

import { getPost } from '../../actions/posts';
import useStyles from './styles';
import { getPosts } from '../../actions/posts';

const PostDetails = () => {
    const { post, posts, isLoading} = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getPost(id));
    }, [])

    if(!post) return null;

    if(isLoading){
        return ( <CircularProgress/> );
    }

    return(
      <Paper style={{padding: '20px', borderRadius: '15px' }} elevation={6}>
        <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h4" component="h3">{`Q. `+post.title}</Typography>
          <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
          <Typography gutterBottom variant="h6" component="p">{post.message}</Typography>
          
          <div className={classes.imageSection}>
          <img className={classes.media} src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
          </div>
          
          <br></br>
          <Typography variant="h6">Created by: {post.name}</Typography>
          <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="body1"><strong>Realtime Chat - coming soon!</strong></Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="body1"><strong>Answer - coming soon!</strong></Typography>
          <Divider style={{ margin: '20px 0' }} />
          
        </div>
      </div>
      </Paper>

    );
}

export default PostDetails;