import React, { useState, useContext } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BookOutlined,
  TeamOutlined,
  SwapOutlined,
  DashboardOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthProvider';

const { Header, Sider, Content } = Layout;

export default function MainLayout({ children }) {
  const { logout, user } = useContext(AuthContext);
  const loc = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const menuItems = [
    {
      key: '/',
      icon: <DashboardOutlined />,
      label: <Link to="/">Dashboard</Link>,
    },
    {
      key: '/books',
      icon: <BookOutlined />,
      label: <Link to="/books">Books</Link>,
    },
    {
      key: '/members',
      icon: <TeamOutlined />,
      label: <Link to="/members">Members</Link>,
    },
    {
      key: '/transactions',
      icon: <SwapOutlined />,
      label: <Link to="/transactions">Transactions</Link>,
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div style={{
          color: '#fff',
          padding: 16,
          fontWeight: 700,
          textAlign: 'center',
          fontSize: collapsed ? 16 : 20
        }}>
          Library
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[loc.pathname]}
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: '0 16px',
            background: colorBgContainer,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{ fontSize: '16px', width: 48, height: 48 }}
            />
            <span style={{ marginLeft: 12 }}>Welcome, {user?.name}</span>
          </div>
          <Button
            type="primary"
            icon={<LogoutOutlined />}
            onClick={logout}
          >
            Logout
          </Button>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
