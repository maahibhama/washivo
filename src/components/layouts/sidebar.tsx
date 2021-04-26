import React from "react";
import { Menu } from "antd";
import {
  LoginOutlined,
  LogoutOutlined,
  UploadOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router";
import { getIsLogin } from "../../reducer/appSlice";
import { store } from "../../app/store";

const SideNav = () => {
  const history = useHistory();
  const isLogin = getIsLogin(store.getState());
  const handleLoginClick = () => {
    history.push("/login");
  };

  const handleHomeClick = () => {
    history.push("/home");
  };

  const handleLogoutClick = () => {
    history.push("/home");
  };

  return (
    <div>
      <div
        style={{
          height: "32px",
          margin: "16px",
        }}
      ></div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="2" onClick={handleHomeClick}>
          <HomeOutlined />
          <span> Home</span>
        </Menu.Item>
        <Menu.Item key="3" onClick={handleLogoutClick}>
          <LogoutOutlined />
          <span> Logout</span>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default SideNav;
