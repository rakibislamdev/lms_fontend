import React, { useContext, useState } from "react";
import { Layout, Menu, Breadcrumb, theme, Button } from "antd";
import {
    DashboardOutlined,
    BookOutlined,
    UsergroupAddOutlined,
    TeamOutlined,
    SettingOutlined,
    UserOutlined,
    ContainerOutlined,
    TagsOutlined,
    GlobalOutlined,
    OrderedListOutlined,
    SolutionOutlined,
    ScheduleOutlined,
    QuestionCircleOutlined,
    StopOutlined,
    ApartmentOutlined,
    CrownOutlined,
    IdcardOutlined,
    BookFilled,
    UserSwitchOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    LogoutOutlined
} from "@ant-design/icons";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider";

const { Header, Content, Footer, Sider } = Layout;

const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { logout, user } = useContext(AuthContext);

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const menuItems = [
        {
            key: "/",
            icon: <DashboardOutlined />,
            label: "Dashboard",
        },
        {
            key: "catalog",
            icon: <BookOutlined />,
            label: "Catalog",
            children: [
                { key: "/books", icon: <BookFilled />, label: "Books" },
                { key: "/authors", icon: <UserSwitchOutlined />, label: "Authors" },
                { key: "/genres", icon: <OrderedListOutlined />, label: "Genres" },
                { key: "/publishers", icon: <ContainerOutlined />, label: "Publishers" },
                { key: "/languages", icon: <GlobalOutlined />, label: "Languages" },
                { key: "/series", icon: <OrderedListOutlined />, label: "Book Series" },
                { key: "/tags", icon: <TagsOutlined />, label: "Tags" },
            ],
        },
        {
            key: "circulation",
            icon: <SolutionOutlined />,
            label: "Circulation",
            children: [
                { key: "/circulation", icon: <ScheduleOutlined />, label: "Circulation Log" },
                { key: "/requests", icon: <QuestionCircleOutlined />, label: "Book Requests" },
                { key: "/penalties", icon: <StopOutlined />, label: "Penalties" },
            ],
        },
        {
            key: "members",
            icon: <TeamOutlined />,
            label: "Members",
            children: [
                { key: "/members", icon: <UsergroupAddOutlined />, label: "Members" },
                { key: "/plans", icon: <IdcardOutlined />, label: "Membership Plans" },
                { key: "/subscriptions", icon: <CrownOutlined />, label: "Subscriptions" },
            ],
        },
        {
            key: "system",
            icon: <SettingOutlined />,
            label: "System",
            children: [
                { key: "/users", icon: <UserOutlined />, label: "Users" },
                { key: "/roles", icon: <ApartmentOutlined />, label: "Roles" },
            ],
        },
    ];

    return (
        <Layout style={{ minHeight: "100vh" }}>
            {/* Sidebar */}
            <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
                <div style={{ padding: "12px", textAlign: "center" }}>
                    <img src="/logo.png" alt="Logo" style={{ height: "50px" }} />
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[location.pathname]}
                    onClick={(e) => navigate(e.key)}
                    items={menuItems}   // ✅ Use new items API
                    style={{
                        height: "calc(100vh - 122px)",
                        overflowY: "auto",
                    }}
                />
            </Sider>

            {/* Main Content */}
            <Layout className="site-layout">
                <Header
                    style={{
                        padding: "0 16px",
                        background: colorBgContainer,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{ fontSize: "16px", width: 48, height: 48 }}
                        />
                        <span style={{ marginLeft: 12 }}>Welcome, {user?.name}</span>
                    </div>
                    <Button type="primary" icon={<LogoutOutlined />} onClick={logout}>
                        Logout
                    </Button>
                </Header>

                <Content
                    style={{
                        margin: "16px",
                        marginBottom: 0,
                        height: "calc(100vh - 154px)",
                        overflowY: "auto",
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Breadcrumb
                        style={{ margin: "16px 0" }}
                        items={[
                            { title: "Library" },
                            {
                                title:
                                    location.pathname === "/"
                                        ? "Dashboard"
                                        : location.pathname.replace("/", ""),
                            },
                        ]}
                    />
                    <div style={{ padding: 24, background: "#fff" }}>
                        <Outlet />
                    </div>
                </Content>

                <Footer style={{ textAlign: "center" }}>
                    Library Management System ©2024 Developed by Rakib
                </Footer>
            </Layout>
        </Layout>
    );
};

export default MainLayout;
