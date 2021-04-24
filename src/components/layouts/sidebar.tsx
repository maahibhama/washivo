import React from "react";
import { Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router";

const SideNav = () => {
  const history = useHistory();

  const handleUserClick = () => {
    history.push("/list");
  };

  const handleVideosClick = () => {
    history.push("/videos");
  };

  const handleFileClick = () => {
    history.push("/files");
  };

  const handleLoginClick = () => {
    history.push("/login");
  };

  const handleSignuoClick = () => {
    history.push("/signup");
  };

  const handleHomeClick = () => {
    history.push("/home");
  };

  return (
    <div >
      <div
        style={{
          height: "32px",
          background: "rgba(255, 255, 255, 0.2)",
          margin: "16px",
        }}
      ></div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" onClick={handleUserClick}>
          <UserOutlined />
          <span> Users</span>
        </Menu.Item>
        <Menu.Item key="2" onClick={handleVideosClick}>
          <VideoCameraOutlined />
          <span> Videos</span>
        </Menu.Item>
        <Menu.Item key="3" onClick={handleFileClick}>
          <UploadOutlined />
          <span> Files</span>
        </Menu.Item>
        <Menu.Item key="4" onClick={handleLoginClick}>
          <UploadOutlined />
          <span> Login</span>
        </Menu.Item>
        <Menu.Item key="5" onClick={handleSignuoClick}>
          <UploadOutlined />
          <span> Signup</span>
        </Menu.Item>
        <Menu.Item key="6" onClick={handleHomeClick}>
          <HomeOutlined />
          <span> Home</span>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default SideNav;
