import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import "./App.module.css";

export default function App() {
  return (
    <div className="container-sm bg-white">
      <Header numItems={5} total={210} />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </div>
  );
}
