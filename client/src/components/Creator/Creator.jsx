import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography, CircularProgress, Grid, Divider } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import Post from "../Posts/Post/Post";
import { getPostsByCreator } from "../../actions/posts";
import useStyles from '../styles';

const Creator = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPostsByCreator(name));
  }, []);

  console.log(name);

  if (!posts && !isLoading) return "No posts";

  return (
    <div>
      <Typography variant="h2">{name}</Typography>
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
