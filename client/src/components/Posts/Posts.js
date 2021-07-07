import React from "react";
import { useSelector } from './styles';
import Post from "./Post/Post";

import useStyles from "../../styles";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts);

  return (
    <>
      <h1>posts</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
