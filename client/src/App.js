import React, { useDebugValue, useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from './actions/posts';
import plycard from "./images/plycard.jpg";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "../src/styles.js"

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

    return(
        <Container maxWidth="lg">
          <AppBar className={classes.appBar} position="static" color="inherit">
           <Typography className={classes.heading} variant="h2" align="center">PlyCards</Typography>
           <img className={classes.image} src={plycard} alt="plycard" height="60"/>
          </AppBar>

          <Grow in>
            <Container>
             <Grid container justify="space-between" alignItems="stretch" spacing={4}>
                 <Grid item xs={12} sm={7}>
                 <Posts setCurrentId={setCurrentId}/> 
                 </Grid>
                 <Grid item xs={12} sm={4}>
                  <Form currentId={currentId} setCurrentId={setCurrentId}/>
                 </Grid>
             </Grid>
            </Container>
          </Grow>
        </Container>
    );
}

export default App;