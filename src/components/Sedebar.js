import React from "react";
import {Layout } from "antd";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import {NavLink} from "react-router-dom";

export const Sidebar = ({ collapsed }) => {

    return (
        <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <nav>
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                    <UserOutlined />
                    Home page
                </NavLink>
                <NavLink to="/schedule" className={({ isActive }) => isActive ? "active" : ""}>
                    <VideoCameraOutlined />
                    Schedule
                </NavLink>
            </nav>
        </Layout.Sider>
    );
}
