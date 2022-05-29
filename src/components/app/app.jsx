import React from "react";
import "./app.css";
import { withBookstoreService } from "../hoc";
import { Routes, Route } from "react-router-dom";
import { HomePage, CardPage } from "./../pages";
import ShopHeader from "../shop-header/shop-header";

const App = () => {
  return (
    <main role="main" className="container" >
      <ShopHeader numItems={5} total={210}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="cart" element={<CardPage />} />
      </Routes>
    </main>
  );
};

export default withBookstoreService()(App);
