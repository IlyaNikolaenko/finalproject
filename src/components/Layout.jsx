import React, {useState} from "react";
import {Outlet} from "react-router-dom";

import {Sidebar} from "./Sedebar";
import {Layout} from "antd";
import {Header} from "./Header";

export const BaseLayout = () => {
    const [collapsed, toggle] = useState(false)

    const handleSwitchCollapsed = () => {
        toggle(!collapsed)
    }

    return (
        <Layout>
            <Sidebar collapsed={collapsed} />
            <Layout className="site-layout">
                <Header collapsed={collapsed} toggle={handleSwitchCollapsed} />
                <Layout.Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <Outlet />
                </Layout.Content>
            </Layout>
        </Layout>
    )
}