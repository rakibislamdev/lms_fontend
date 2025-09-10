import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import MainLayout from "./components/Layout/MainLayout";

// Pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Books from "./pages/Books";
import Members from "./pages/Members";
import Authors from "./pages/Authors";
import Genres from "./pages/Genres";
import Publishers from "./pages/Publishers";
import BookLanguages from "./pages/BookLanguages";
import Tags from "./pages/Tags";
import Users from "./pages/Users";
import Roles from "./pages/Roles";
import MembershipPlans from "./pages/MembershipPlans";
import Subscriptions from "./pages/Subscriptions";
import BooksSeries from "./pages/BooksSeries";
import BookRequests from "./pages/BookRequests";
import Penalties from "./pages/Penalties";
import BooksCirculation from "./pages/BooksCirculation";

export default function App() {
  return (
    <AuthProvider>
      {/* <AppProvider> */}
        <BrowserRouter>
          <Routes>
            {/* Public route */}
            <Route path="/login" element={<Login />} />

            {/* Protected routes with layout */}
            <Route element={<MainLayout />}>
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route path="/books" element={<ProtectedRoute><Books /></ProtectedRoute>} />
              <Route path="/members" element={<ProtectedRoute><Members /></ProtectedRoute>} />
              <Route path="/authors" element={<ProtectedRoute><Authors /></ProtectedRoute>} />
              <Route path="/genres" element={<ProtectedRoute><Genres /></ProtectedRoute>} />
              <Route path="/publishers" element={<ProtectedRoute><Publishers /></ProtectedRoute>} />
              <Route path="/languages" element={<ProtectedRoute><BookLanguages /></ProtectedRoute>} />
              <Route path="/series" element={<ProtectedRoute><BooksSeries /></ProtectedRoute>} />
              <Route path="/tags" element={<ProtectedRoute><Tags /></ProtectedRoute>} />
              <Route path="/users" element={<ProtectedRoute><Users /></ProtectedRoute>} />
              <Route path="/roles" element={<ProtectedRoute><Roles /></ProtectedRoute>} />
              <Route path="/plans" element={<ProtectedRoute><MembershipPlans /></ProtectedRoute>} />
              <Route path="/subscriptions" element={<ProtectedRoute><Subscriptions /></ProtectedRoute>} />
              <Route path="/circulation" element={<ProtectedRoute><BooksCirculation /></ProtectedRoute>} />
              <Route path="/requests" element={<ProtectedRoute><BookRequests /></ProtectedRoute>} />
              <Route path="/penalties" element={<ProtectedRoute><Penalties /></ProtectedRoute>} />
            </Route>
          </Routes>
        </BrowserRouter>
      {/* </AppProvider> */}
    </AuthProvider>
  );
}



















// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
// import Books from './pages/Books';
// import Members from './pages/Members';
// import Transactions from './pages/Transactions';
// import { AuthProvider } from './auth/AuthProvider';
// import ProtectedRoute from './components/ProtectedRoute';

// export default function App() {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
//           <Route path="/books" element={<ProtectedRoute><Books /></ProtectedRoute>} />
//           <Route path="/members" element={<ProtectedRoute><Members /></ProtectedRoute>} />
//           <Route path="/transactions" element={<ProtectedRoute><Transactions /></ProtectedRoute>} />
//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// }

// import React from 'react';
// import { Layout, Menu, Breadcrumb } from 'antd';
// import {
//   BookOutlined,
//   TeamOutlined,
//   UserOutlined,
//   SettingOutlined,
//   DashboardOutlined,
//   GlobalOutlined,
//   SolutionOutlined,

//   OrderedListOutlined,
//   UnorderedListOutlined,
//   BookFilled,
//   UsergroupAddOutlined,
//   IdcardOutlined,
//   ContainerOutlined,
//   TagsOutlined,
//   UserSwitchOutlined,
//   ApartmentOutlined,
//   CrownOutlined,
//   ScheduleOutlined,
//   QuestionCircleOutlined,
//   StopOutlined
// } from '@ant-design/icons';
// import Dashboard from './pages/Dashboard';
// import Books from './pages/Books';
// import BooksCirculation from './pages/BooksCirculation';
// import Members from './pages/Members';
// import Genres from './pages/Genres';
// import Authors from './pages/Authors';
// import Publishers from './pages/Publishers';
// import BookLanguages from './pages/BookLanguages';
// import Tags from './pages/Tags';
// import Users from './pages/Users';
// import Roles from './pages/Roles';
// import MembershipPlans from './pages/MembershipPlans';
// import Subscriptions from './pages/Subscriptions';
// import BooksSeries from './pages/BooksSeries';
// import BookRequests from './pages/BookRequests';
// import Penalties from './pages/Penalties';

// const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;




// // --- Main App Component ---
// const App = () => {
//   const [collapsed, setCollapsed] = React.useState(false);
//   const [activePage, setActivePage] = React.useState('Dashboard');

//   const onCollapse = collapsed => {
//     setCollapsed(collapsed);
//   };

//   const handleMenuClick = e => {
//     setActivePage(e.key);
//   };

//   const pageComponents = {
//     'Dashboard': <Dashboard />,
//     'Books': <Books />,
//     'Books Circulation': <BooksCirculation />,
//     'Members': <Members />,
//     'Genres': <Genres />,
//     'Authors': <Authors />,
//     'Publishers': <Publishers />,
//     'Book Languages': <BookLanguages />,
//     'Tags': <Tags />,
//     'Users': <Users />,
//     'Roles': <Roles />,
//     'Membership Plans': <MembershipPlans />,
//     'Subscriptions': <Subscriptions />,
//     'Books Series': <BooksSeries />,
//     'Book Requests': <BookRequests />,
//     'Penalties': <Penalties />,
//   };

//   return (
//     <Layout style={{ minHeight: "100vh" }}>
//       {/* Sidebar */}
//       <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
//         <div
//           style={{
//             padding: "12px",
//             textAlign: "center",
//             color: "white",
//             fontWeight: "bold",
//           }}
//         >
//           {/* {collapsed ? "LMS" : "Library System"} */}
//           <img src="logo.png" alt="Logo" style={{ height: "50px" }} />
//         </div>
//         <Menu
//           theme="dark"
//           defaultSelectedKeys={["Dashboard"]}
//           mode="inline"
//           onClick={handleMenuClick}
//           style={{ 
//             height: "calc(100vh - 122px)",
//             overflowY: "auto",
//             scrollbarWidth: "none",
//             "-ms-overflow-style": "none",
//             "&::-webkit-scrollbar": {
//               display: "none",
//             },
//            }}
//         >
//           <Menu.Item key="Dashboard" icon={<DashboardOutlined />}>
//             Dashboard
//           </Menu.Item>

//           <SubMenu key="sub1" icon={<BookOutlined />} title="Catalog">
//             <Menu.Item key="Books" icon={<BookFilled />}>
//               Books
//             </Menu.Item>
//             <Menu.Item key="Authors" icon={<UserSwitchOutlined />}>
//               Authors
//             </Menu.Item>
//             <Menu.Item key="Genres" icon={<UnorderedListOutlined />}>
//               Genres
//             </Menu.Item>
//             <Menu.Item key="Publishers" icon={<ContainerOutlined />}>
//               Publishers
//             </Menu.Item>
//             <Menu.Item key="Book Languages" icon={<GlobalOutlined />}>
//               Languages
//             </Menu.Item>
//             <Menu.Item key="Books Series" icon={<OrderedListOutlined />}>
//               Book Series
//             </Menu.Item>
//             <Menu.Item key="Tags" icon={<TagsOutlined />}>
//               Tags
//             </Menu.Item>
//           </SubMenu>

//           <SubMenu key="sub2" icon={<SolutionOutlined />} title="Circulation">
//             <Menu.Item key="Books Circulation" icon={<ScheduleOutlined />}>
//               Circulation Log
//             </Menu.Item>
//             <Menu.Item key="Book Requests" icon={<QuestionCircleOutlined />}>
//               Book Requests
//             </Menu.Item>
//             <Menu.Item key="Penalties" icon={<StopOutlined />}>
//               Penalties
//             </Menu.Item>
//           </SubMenu>

//           <SubMenu key="sub3" icon={<TeamOutlined />} title="Members">
//             <Menu.Item key="Members" icon={<UsergroupAddOutlined />}>
//               Members List
//             </Menu.Item>
//             <Menu.Item key="Membership Plans" icon={<IdcardOutlined />}>
//               Membership Plans
//             </Menu.Item>
//             <Menu.Item key="Subscriptions" icon={<CrownOutlined />}>
//               Subscriptions
//             </Menu.Item>
//           </SubMenu>

//           <SubMenu key="sub4" icon={<SettingOutlined />} title="System">
//             <Menu.Item key="Users" icon={<UserOutlined />}>
//               Users
//             </Menu.Item>
//             <Menu.Item key="Roles" icon={<ApartmentOutlined />}>
//               Roles
//             </Menu.Item>
//           </SubMenu>
//         </Menu>
//       </Sider>

//       {/* Main Layout */}
//       <Layout className="site-layout h-full" style={{ display: "flex", flexDirection: "column" }}>
//         <Header
//           className="site-layout-background"
//           style={{ padding: "5px", background: "#fff", height: "50px", alignItems: 'center', display: 'flex', }}
//         >
//           <span style={{ fontSize: "24px", fontWeight: "bold" }}>{activePage}</span>
//         </Header>

//         {/* Content takes remaining height */}
//         <Content style={{ margin: "0 16px", height: 'calc(100vh - 90px)' }}>
//           <Breadcrumb style={{ height: "40px", lineHeight: "40px" }}>
//             <Breadcrumb.Item>Library</Breadcrumb.Item>
//             <Breadcrumb.Item>{activePage}</Breadcrumb.Item>
//           </Breadcrumb>

//           {/* Scrollable section */}
//           <div
//             className="site-layout-background content-section"
//             style={{
//               height: 'calc(100vh - 90px - 48px)',
//               padding: 24,
//               background: "#fff",
//               overflowY: "auto",
//               scrollbarWidth: "none",
//               msOverflowStyle: "none",
//             }}
//           >
//             {pageComponents[activePage]}
//           </div>
//         </Content>

//         <Footer style={{ textAlign: "center", height: "40px", display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
//           Library Management System ©2024 Develop by Rakib
//         </Footer>
//       </Layout>
//     </Layout>
//   );

// };

// export default App;

