import React from "react";
import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Switch>
           <Route path="/" exact component={Home} />
           <Route path="/auth" exact component={Auth} />
           <Route path="/posts/:id" component={PostDetails} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
