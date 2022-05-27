import React, { useContext, useEffect } from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Create from "./Pages/Create";
import View from "./Pages/ViewPost";
import { AuthContext, FirebaseContext } from "./store/Context";
import Post from "./store/PostContex";

function App() {
  const { setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <div>
      <Post>
        <Router>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route path={"/signup"}>
            <Signup></Signup>
          </Route>
          <Route path={"/login"}>
            <Login></Login>
          </Route>
          <Route path={"/create"}>
            <Create />
          </Route>
          <Route path={"/viewpost"}>
            <View />
          </Route>
        </Router>
      </Post>
    </div>
  );
}

export default App;
