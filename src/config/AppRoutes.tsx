import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Layout } from "antd";
import ApplicationRoutes from "./ApplicationRoutes";
import AuthenticationRoutes from "./AuthenticationRoutes";

const { Header, Sider, Content } = Layout;

const AppRoutes = () => {
  return (
    <Router>
      <Layout>
          <Switch>
            <Route  path="/app" component={ApplicationRoutes} />
            <Route  path="/auth" component={AuthenticationRoutes} />
            <Redirect to="/auth" from="/" />
          </Switch>
      </Layout>
    </Router>
  );
};

export default AppRoutes;
