import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { GoogleLogin } from "react-google-login";
import Icon from './icon';
import { useDispatch } from 'react-redux';
import useStyles from "./styles";
import Input from "./input";
import { useHistory } from "react-router-dom";

const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = () => {};

  const handleSubmit = () => {};

  const switchMode = () => {
    
  }

  const googleSuccess = (res) => {
      const result = res?.profileObj;
      const token = res?.tokenId;

      try{
         dispatch({type: 'AUTH', data: { result, token}});

         history.pushState('/');   // used to redirect to home page 
      }catch(error){
         console.log(error);
      }
  };

  const googleFailure = (error) => {
    console.log(error);  
    console.log("Google Sign In was not completed");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography componnent="h1" varient="h5">
          {isSignup ? "Sign Up" : "Sign In"}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type="password"
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
        
          <Button
          type="submit"
          fullWidth
          varient="contained"
          color="primary"
          className={classes.submit}
          >
          {isSignup ? "Sign up" : "Sign in"}
          </Button>
          <GoogleLogin
            clientId="287564293735-sdfqtpf6vlt6evkvqb5o4ink090voekf.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="primary"
                fullwidth
                onClick={renderProps.onClick}
                disable={renderProps.disable}
                startIcon={<Icon />}
                variant="contained"
              >
                Google Sign In
              </Button>
            )}

            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
