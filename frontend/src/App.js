import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import Login from "./components/Login";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import MyNav from "./components/MyNavBar";
import store from "./Reducer/Reducer";
import PrivateRouter from "./PrivateRouter";

const App = (props) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MyNav />
        <Switch>
          <Route path="/login" component={Login} exact={true} />
          <PrivateRouter />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
