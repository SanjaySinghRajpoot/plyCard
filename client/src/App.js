import React from "react";
import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";
import Creator from './components/Creator/Creator';
import Chat from "./components/message/chat";

const App = () => {

   const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
           <Route path="/" exact component={() => <Redirect to="/posts"/>} />
           <Route path="/posts" exact component={Home} />
           <Route path="/creators/:name" exact component={Creator} />
           <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts"/>)} />
           <Route path="/posts/:id" component={PostDetails} />
           <Route path="/message/:id" component={Chat} /> 
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
