import React from "react";
import { Routes as RRDRoutes, Route } from "react-router-dom";
import Home from "../pages/Home";

const Routes: React.FC = () => (
  <RRDRoutes>
    <Route path="/" element={<Home />} />
  </RRDRoutes>
);

export default Routes;
