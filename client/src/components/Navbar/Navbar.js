import React, { useState, useEffect } from "react";
import { Typography, AppBar, Toolbar, Avatar, Button } from "@material-ui/core";
import plycard from "../../images/plycard.jpg";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import decode from 'jwt-decode';

const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));   
  const dispatch = useDispatch();
  // console.log(user);
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
        dispatch({ type: 'LOGOUT' });
       
        history.push('/');

        setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if(token){
       const decodedToken = decode(token);

       if(decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));  // use profile 
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography className={classes.heading} variant="h2" align="center">
          Plycard
        </Typography>
        <img className={classes.image} src={plycard} alt="icon" height="60" />
      </div>

      <Toolbar className={classes.toolbar}>
      {user?.result ? (
        <div className={classes.profile}>
          <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
          <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
          <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
        </div>
      ) : (
        <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
      )}
    </Toolbar>
    </AppBar>
  );
};

export default Navbar;
