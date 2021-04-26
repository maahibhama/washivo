import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Layout } from "antd";
import Login from "../components/pages/login";
import Signup from "../components/pages/signup";

const { Header, Sider, Content } = Layout;

const AuthenticationRoutes = () => {
  return (
    <Router>
      <Layout>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "calc(100vh - 114px)",
            background: "#fff",
          }}
        >
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Redirect to="/login" from="/" />
          </Switch>
        </Content>
      </Layout>
    </Router>
  );
};

export default AuthenticationRoutes;
