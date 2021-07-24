import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
// import { useHistory } from 'react-router-dom';
// import { GoogleLogin } from 'react-google-login';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

// import Icon from './icon';
// import { signin, signup } from '../../actions/auth';
// import { AUTH } from '../../constants/actionTypes';
import useStyles from './styles';
import Input from './input';

const Auth = () => {

    const classes = useStyles();

    const isSignup = false;

    const handleChange = () => {
      
    }

    const handleSubmit = () => {

    };

    return (
        <Container component="main" maxWidth="xs">
           <Paper className={classes.paper} elevation={3}>
             <Avatar className={classes.avatar}>
               <LockOutlinedIcon />
             </Avatar>
             <Typography componnent="h1" varient="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
              <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}> 
                { isSignup && (
                  <>
                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                    <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                  </>
                  )}

                    <Input name="email" label="Email Address" handleChange={handleChange} type="email" /> 
                    <Input name="password" label="Password" handleChange={handleChange} type="password" /> 
                    { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>} 
                </Grid>
                <Button type="submit" fullWidth varient="contained" color="primary" className={classes.submit}>
                  {isSignup ? 'Sign up' : 'Sign in'}
                </Button>
              </form>
             </Paper>
        </Container>
    )
}

export default Auth;