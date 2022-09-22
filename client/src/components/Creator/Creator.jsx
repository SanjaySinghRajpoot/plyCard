import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography, CircularProgress, Grid, Divider } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Post from "../Posts/Post/Post";
import { getPostsByCreator } from "../../actions/posts";
import useStyles from '../styles';
import { message } from "../message/chat";
import { useHistory } from "react-router-dom";


const Creator = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    dispatch(getPostsByCreator(name));
  }, []);

  const openMessage = () => {
    history.push(`/message/${posts[0].creator}`);
  };

  if (!posts && !isLoading) return "No posts";

  return (
    <div>
      <Typography variant="h2">{name} <MailOutlineIcon fontSize="large" onClick={openMessage}/></Typography>
      <Divider style={{ margin: "20px 0 50px 0" }} />
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Grid
          container
          direction="row"
          alignItems="stretch"
          spacing={6}
          // xs={6}
        >
          {console.log(posts[0].creator)}
          {console.log(posts)} 
          {posts.map((post) => (
            <Grid key={post._id} item xs={6}>
              <Post post={post} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Creator;
