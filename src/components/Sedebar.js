import React from "react";
import {Menu, Layout} from "antd";
import {Link} from "react-router-dom";
import {UserOutlined, VideoCameraOutlined} from "@ant-design/icons";

export const Sidebar = ({collapsed}) => {
    return (
        <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                    <Link to="/">
                        MainPage
                    </Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                    <Link to="/schedule">
                        Schedule
                    </Link>
                </Menu.Item>
            </Menu>
        </Layout.Sider>
    )
}