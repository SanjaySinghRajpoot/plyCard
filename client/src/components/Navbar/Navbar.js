import React, { useState, useEffect } from "react";
import { Typography, AppBar, Toolbar, Avatar, Button } from "@material-ui/core";
import plycard from "../../images/plycard.jpg";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));   

  console.log(user);

  useEffect(() => {
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem('profile'));
  }, []);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography className={classes.heading} variant="h2" align="center">
          Plycards
        </Typography>
        <img className={classes.image} src={plycard} alt="icon" height="60" />
      </div>

      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} varient="h6">
              {user.result.name}
            </Typography>
            <Button
              varient="contained"
              className={classes.logout}
              color="secondary"
            >
              Logout
            </Button>
          </div>
        ) : (
          <div>
            <Button
              component={Link}
              to="/auth"
              varient="contained"
              color="primary"
            >
              Login
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
