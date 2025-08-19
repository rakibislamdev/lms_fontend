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

import React from 'react';
import { Layout, Menu, Breadcrumb, Card, Row, Col, Table, Tag, Space, Button, Input, Form, Modal, Select, DatePicker } from 'antd';
import {
  AppstoreOutlined,
  BookOutlined,
  TeamOutlined,
  UserOutlined,
  SettingOutlined,
  DashboardOutlined,
  TagOutlined,
  GlobalOutlined,
  ReadOutlined,
  SolutionOutlined,
  DollarCircleOutlined,
  FileTextOutlined,
  ExclamationCircleOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  OrderedListOutlined,
  UnorderedListOutlined,
  BookFilled,
  UsergroupAddOutlined,
  IdcardOutlined,
  ContainerOutlined,
  TagsOutlined,
  UserSwitchOutlined,
  ApartmentOutlined,
  CrownOutlined,
  ScheduleOutlined,
  QuestionCircleOutlined,
  StopOutlined
} from '@ant-design/icons';
import Dashboard from './pages/Dashboard';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Option } = Select;

// --- MOCK DATA ---
// This data simulates what would come from your Node.js/MongoDB backend.

const booksData = [
  { key: '1', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic', status: 'Available' },
  { key: '2', title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Classic', status: 'Borrowed' },
  { key: '3', title: '1984', author: 'George Orwell', genre: 'Dystopian', status: 'Available' },
  { key: '4', title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance', status: 'Maintenance' },
];

const membersData = [
  { key: '1', name: 'Alice Johnson', memberId: 'M001', plan: 'Gold', joinDate: '2023-01-15', status: 'Active' },
  { key: '2', name: 'Bob Smith', memberId: 'M002', plan: 'Silver', joinDate: '2023-02-20', status: 'Active' },
  { key: '3', name: 'Charlie Brown', memberId: 'M003', plan: 'Bronze', joinDate: '2022-11-10', status: 'Expired' },
  { key: '4', name: 'Diana Prince', memberId: 'M004', plan: 'Gold', joinDate: '2023-05-01', status: 'Active' },
];

const circulationData = [
  { key: '1', bookTitle: 'The Great Gatsby', memberName: 'Bob Smith', borrowDate: '2024-07-10', returnDate: '2024-08-10', status: 'Borrowed' },
  { key: '2', bookTitle: 'To Kill a Mockingbird', memberName: 'Alice Johnson', borrowDate: '2024-07-15', returnDate: '2024-08-15', status: 'Borrowed' },
  { key: '3', bookTitle: 'The Hobbit', memberName: 'Charlie Brown', borrowDate: '2024-06-05', returnDate: '2024-07-05', status: 'Returned' },
];

const genresData = [{ key: '1', name: 'Classic' }, { key: '2', name: 'Dystopian' }, { key: '3', name: 'Romance' }, { key: '4', name: 'Science Fiction' }];
const authorsData = [{ key: '1', name: 'F. Scott Fitzgerald' }, { key: '2', name: 'Harper Lee' }, { key: '3', name: 'George Orwell' }, { key: '4', name: 'Jane Austen' }];
const publishersData = [{ key: '1', name: 'Penguin Books' }, { key: '2', name: 'HarperCollins' }, { key: '3', name: 'Simon & Schuster' }];
const languagesData = [{ key: '1', name: 'English' }, { key: '2', name: 'Spanish' }, { key: '3', name: 'French' }];
const tagsData = [{ key: '1', name: 'Bestseller' }, { key: '2', name: 'New Arrival' }, { key: '3', name: 'Award Winner' }];
const usersData = [{ key: '1', name: 'Admin User', email: 'admin@example.com', role: 'Administrator' }, { key: '2', name: 'Librarian User', email: 'librarian@example.com', role: 'Librarian' }];
const rolesData = [{ key: '1', name: 'Administrator', permissions: ['Manage Users', 'Manage Books', 'Settings'] }, { key: '2', name: 'Librarian', permissions: ['Manage Books', 'Circulation'] }];
const plansData = [{ key: '1', name: 'Gold', fee: '$50/year', maxBooks: 10 }, { key: '2', name: 'Silver', fee: '$30/year', maxBooks: 5 }, { key: '3', name: 'Bronze', fee: '$15/year', maxBooks: 2 }];
const subscriptionsData = [{ key: '1', memberName: 'Alice Johnson', plan: 'Gold', startDate: '2024-01-15', endDate: '2025-01-15', status: 'Active' }];
const seriesData = [{ key: '1', name: 'The Lord of the Rings' }, { key: '2', name: 'Harry Potter' }];
const requestsData = [{ key: '1', bookTitle: 'Dune', memberName: 'Bob Smith', requestDate: '2024-07-20', status: 'Pending' }];
const penaltiesData = [{ key: '1', memberName: 'Charlie Brown', bookTitle: 'The Hobbit', amount: '$2.50', reason: 'Late Return', status: 'Paid' }];


// --- Reusable CRUD Modal Component ---
const CrudModal = ({ visible, onCancel, onOk, title, form }) => {
  return (
    <Modal
      visible={visible}
      title={title}
      okText="Save"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={onOk}
    >
      {form}
    </Modal>
  );
};


// --- Generic Page Component for CRUD operations ---
const GenericCrudPage = ({ pageTitle, columns, data, formFields }) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [editingRecord, setEditingRecord] = React.useState(null);
  const [form] = Form.useForm();

  const showModal = (record = null) => {
    setEditingRecord(record);
    form.setFieldsValue(record || {});
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form.validateFields().then(values => {
      console.log('Form Values: ', values);
      // Here you would typically send the data to your backend API
      if (editingRecord) {
        console.log("Updating record", editingRecord.key, values);
      } else {
        console.log("Creating new record", values);
      }
      setIsModalVisible(false);
      form.resetFields();
    }).catch(info => {
      console.log('Validate Failed:', info);
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleDelete = (key) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this item?',
      icon: <ExclamationCircleOutlined />,
      content: 'This action cannot be undone.',
      onOk() {
        console.log('Deleting record with key:', key);
        // Here you would call your backend API to delete the record
      },
      onCancel() {
        console.log('Cancel delete');
      },
    });
  };

  const extendedColumns = [
    ...columns,
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button icon={<EditOutlined />} onClick={() => showModal(record)}>Edit</Button>
          <Button icon={<DeleteOutlined />} danger onClick={() => handleDelete(record.key)}>Delete</Button>
        </Space>
      ),
    },
  ];

  const renderFormFields = () => {
    return formFields.map(field => {
      switch (field.type) {
        case 'select':
          return (
            <Form.Item key={field.name} name={field.name} label={field.label} rules={[{ required: true }]}>
              <Select placeholder={field.placeholder}>
                {field.options.map(option => (
                  <Option key={option.value} value={option.value}>{option.label}</Option>
                ))}
              </Select>
            </Form.Item>
          );
        case 'date':
          return (
            <Form.Item key={field.name} name={field.name} label={field.label} rules={[{ required: true }]}>
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          );
        default:
          return (
            <Form.Item key={field.name} name={field.name} label={field.label} rules={[{ required: true }]}>
              <Input placeholder={field.placeholder} />
            </Form.Item>
          );
      }
    });
  };

  return (
    <>
      <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>{pageTitle}</h2>
        <Button type="primary" icon={<PlusOutlined />} onClick={() => showModal()}>
          Add New
        </Button>
      </div>
      <Table columns={extendedColumns} dataSource={data} />
      <CrudModal
        visible={isModalVisible}
        onCancel={handleCancel}
        onOk={handleOk}
        title={editingRecord ? `Edit ${pageTitle}` : `Add New ${pageTitle}`}
        form={
          <Form form={form} layout="vertical" name="form_in_modal">
            {renderFormFields()}
          </Form>
        }
      />
    </>
  );
};


// --- Page Components ---

// const Dashboard = () => (
//   <div className="site-card-wrapper">
//     <Row gutter={16}>
//       <Col span={6}>
//         <Card title="Total Books" bordered={false}>
//           <p style={{ fontSize: 24, fontWeight: 'bold' }}>1,250</p>
//         </Card>
//       </Col>
//       <Col span={6}>
//         <Card title="Members" bordered={false}>
//           <p style={{ fontSize: 24, fontWeight: 'bold' }}>350</p>
//         </Card>
//       </Col>
//       <Col span={6}>
//         <Card title="Books Borrowed" bordered={false}>
//           <p style={{ fontSize: 24, fontWeight: 'bold' }}>120</p>
//         </Card>
//       </Col>
//       <Col span={6}>
//         <Card title="Overdue Books" bordered={false}>
//           <p style={{ fontSize: 24, fontWeight: 'bold' }}>15</p>
//         </Card>
//       </Col>
//     </Row>
//     <Row gutter={16} style={{ marginTop: 24 }}>
//       <Col span={12}>
//         <Card title="Recent Activity">
//           <p>Alice Johnson borrowed 'To Kill a Mockingbird'.</p>
//           <p>New book 'Dune' added to the collection.</p>
//           <p>Bob Smith renewed his Gold membership.</p>
//         </Card>
//       </Col>
//       <Col span={12}>
//         <Card title="Quick Actions">
//           <Space>
//             <Button type="primary">Add New Book</Button>
//             <Button>Add New Member</Button>
//             <Button>Issue a Book</Button>
//           </Space>
//         </Card>
//       </Col>
//     </Row>
//   </div>
// );

const Books = () => {
  const columns = [
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Author', dataIndex: 'author', key: 'author' },
    { title: 'Genre', dataIndex: 'genre', key: 'genre' },
    {
      title: 'Status', dataIndex: 'status', key: 'status', render: status => {
        let color = status === 'Available' ? 'green' : 'volcano';
        if (status === 'Maintenance') color = 'geekblue';
        return <Tag color={color}>{status.toUpperCase()}</Tag>;
      }
    },
  ];
  const formFields = [
    { name: 'title', label: 'Book Title', placeholder: 'Enter book title' },
    { name: 'author', label: 'Author', placeholder: 'Enter author name' },
    { name: 'genre', label: 'Genre', placeholder: 'Enter genre' },
    {
      name: 'status', label: 'Status', type: 'select', options: [
        { value: 'Available', label: 'Available' },
        { value: 'Borrowed', label: 'Borrowed' },
        { value: 'Maintenance', label: 'Maintenance' },
      ]
    },
  ];
  return <GenericCrudPage pageTitle="Books" columns={columns} data={booksData} formFields={formFields} />;
};

const BooksCirculation = () => {
  const columns = [
    { title: 'Book Title', dataIndex: 'bookTitle', key: 'bookTitle' },
    { title: 'Member Name', dataIndex: 'memberName', key: 'memberName' },
    { title: 'Borrow Date', dataIndex: 'borrowDate', key: 'borrowDate' },
    { title: 'Return Date', dataIndex: 'returnDate', key: 'returnDate' },
    { title: 'Status', dataIndex: 'status', key: 'status', render: status => <Tag color={status === 'Borrowed' ? 'blue' : 'default'}>{status}</Tag> },
  ];
  const formFields = [
    { name: 'bookTitle', label: 'Book', type: 'select', options: booksData.map(b => ({ value: b.title, label: b.title })) },
    { name: 'memberName', label: 'Member', type: 'select', options: membersData.map(m => ({ value: m.name, label: m.name })) },
    { name: 'borrowDate', label: 'Borrow Date', type: 'date' },
    { name: 'returnDate', label: 'Return Date', type: 'date' },
  ];
  return <GenericCrudPage pageTitle="Books Circulation" columns={columns} data={circulationData} formFields={formFields} />;
};

const Members = () => {
  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Member ID', dataIndex: 'memberId', key: 'memberId' },
    { title: 'Membership Plan', dataIndex: 'plan', key: 'plan' },
    { title: 'Join Date', dataIndex: 'joinDate', key: 'joinDate' },
    { title: 'Status', dataIndex: 'status', key: 'status', render: status => <Tag color={status === 'Active' ? 'green' : 'red'}>{status}</Tag> },
  ];
  const formFields = [
    { name: 'name', label: 'Member Name', placeholder: 'Enter member name' },
    { name: 'plan', label: 'Membership Plan', type: 'select', options: plansData.map(p => ({ value: p.name, label: p.name })) },
    { name: 'joinDate', label: 'Join Date', type: 'date' },
  ];
  return <GenericCrudPage pageTitle="Members" columns={columns} data={membersData} formFields={formFields} />;
};

// --- Simple CRUD Pages ---
const Genres = () => <GenericCrudPage pageTitle="Genres" columns={[{ title: 'Name', dataIndex: 'name', key: 'name' }]} data={genresData} formFields={[{ name: 'name', label: 'Genre Name', placeholder: 'Enter genre name' }]} />;
const Authors = () => <GenericCrudPage pageTitle="Authors" columns={[{ title: 'Name', dataIndex: 'name', key: 'name' }]} data={authorsData} formFields={[{ name: 'name', label: 'Author Name', placeholder: 'Enter author name' }]} />;
const Publishers = () => <GenericCrudPage pageTitle="Publishers" columns={[{ title: 'Name', dataIndex: 'name', key: 'name' }]} data={publishersData} formFields={[{ name: 'name', label: 'Publisher Name', placeholder: 'Enter publisher name' }]} />;
const BookLanguages = () => <GenericCrudPage pageTitle="Book Languages" columns={[{ title: 'Name', dataIndex: 'name', key: 'name' }]} data={languagesData} formFields={[{ name: 'name', label: 'Language Name', placeholder: 'Enter language name' }]} />;
const Tags = () => <GenericCrudPage pageTitle="Tags" columns={[{ title: 'Name', dataIndex: 'name', key: 'name' }]} data={tagsData} formFields={[{ name: 'name', label: 'Tag Name', placeholder: 'Enter tag name' }]} />;
const BooksSeries = () => <GenericCrudPage pageTitle="Book Series" columns={[{ title: 'Name', dataIndex: 'name', key: 'name' }]} data={seriesData} formFields={[{ name: 'name', label: 'Series Name', placeholder: 'Enter series name' }]} />;

const Users = () => {
  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Role', dataIndex: 'role', key: 'role' },
  ];
  const formFields = [
    { name: 'name', label: 'User Name', placeholder: 'Enter user name' },
    { name: 'email', label: 'Email Address', placeholder: 'Enter email' },
    { name: 'role', label: 'Role', type: 'select', options: rolesData.map(r => ({ value: r.name, label: r.name })) },
  ];
  return <GenericCrudPage pageTitle="Users" columns={columns} data={usersData} formFields={formFields} />;
};

const Roles = () => {
  const columns = [
    { title: 'Role Name', dataIndex: 'name', key: 'name' },
    { title: 'Permissions', dataIndex: 'permissions', key: 'permissions', render: perms => perms.map(p => <Tag key={p}>{p}</Tag>) },
  ];
  const formFields = [
    { name: 'name', label: 'Role Name', placeholder: 'Enter role name' },
    // A real implementation would use a multi-select for permissions
    { name: 'permissions', label: 'Permissions', placeholder: 'Enter permissions (comma-separated)' },
  ];
  return <GenericCrudPage pageTitle="Roles" columns={columns} data={rolesData} formFields={formFields} />;
};

const MembershipPlans = () => {
  const columns = [
    { title: 'Plan Name', dataIndex: 'name', key: 'name' },
    { title: 'Fee', dataIndex: 'fee', key: 'fee' },
    { title: 'Max Books Allowed', dataIndex: 'maxBooks', key: 'maxBooks' },
  ];
  const formFields = [
    { name: 'name', label: 'Plan Name', placeholder: 'Enter plan name' },
    { name: 'fee', label: 'Fee', placeholder: 'e.g., $50/year' },
    { name: 'maxBooks', label: 'Max Books', placeholder: 'e.g., 10' },
  ];
  return <GenericCrudPage pageTitle="Membership Plans" columns={columns} data={plansData} formFields={formFields} />;
};

const Subscriptions = () => {
  const columns = [
    { title: 'Member Name', dataIndex: 'memberName', key: 'memberName' },
    { title: 'Plan', dataIndex: 'plan', key: 'plan' },
    { title: 'Start Date', dataIndex: 'startDate', key: 'startDate' },
    { title: 'End Date', dataIndex: 'endDate', key: 'endDate' },
    { title: 'Status', dataIndex: 'status', key: 'status', render: status => <Tag color={status === 'Active' ? 'green' : 'red'}>{status}</Tag> },
  ];
  const formFields = [
    { name: 'memberName', label: 'Member', type: 'select', options: membersData.map(m => ({ value: m.name, label: m.name })) },
    { name: 'plan', label: 'Plan', type: 'select', options: plansData.map(p => ({ value: p.name, label: p.name })) },
    { name: 'startDate', label: 'Start Date', type: 'date' },
    { name: 'endDate', label: 'End Date', type: 'date' },
  ];
  return <GenericCrudPage pageTitle="Subscriptions" columns={columns} data={subscriptionsData} formFields={formFields} />;
};

const BookRequests = () => {
  const columns = [
    { title: 'Book Title', dataIndex: 'bookTitle', key: 'bookTitle' },
    { title: 'Member Name', dataIndex: 'memberName', key: 'memberName' },
    { title: 'Request Date', dataIndex: 'requestDate', key: 'requestDate' },
    { title: 'Status', dataIndex: 'status', key: 'status', render: status => <Tag color={status === 'Pending' ? 'orange' : 'green'}>{status}</Tag> },
  ];
  const formFields = [
    { name: 'bookTitle', label: 'Book Title', placeholder: 'Enter requested book title' },
    { name: 'memberName', label: 'Member', type: 'select', options: membersData.map(m => ({ value: m.name, label: m.name })) },
    { name: 'requestDate', label: 'Request Date', type: 'date' },
  ];
  return <GenericCrudPage pageTitle="Book Requests" columns={columns} data={requestsData} formFields={formFields} />;
};

const Penalties = () => {
  const columns = [
    { title: 'Member Name', dataIndex: 'memberName', key: 'memberName' },
    { title: 'Book Title', dataIndex: 'bookTitle', key: 'bookTitle' },
    { title: 'Amount', dataIndex: 'amount', key: 'amount' },
    { title: 'Reason', dataIndex: 'reason', key: 'reason' },
    { title: 'Status', dataIndex: 'status', key: 'status', render: status => <Tag color={status === 'Paid' ? 'green' : 'red'}>{status}</Tag> },
  ];
  const formFields = [
    { name: 'memberName', label: 'Member', type: 'select', options: membersData.map(m => ({ value: m.name, label: m.name })) },
    { name: 'bookTitle', label: 'Book', type: 'select', options: booksData.map(b => ({ value: b.title, label: b.title })) },
    { name: 'amount', label: 'Amount', placeholder: 'e.g., $2.50' },
    { name: 'reason', label: 'Reason', placeholder: 'e.g., Late Return' },
  ];
  return <GenericCrudPage pageTitle="Penalties" columns={columns} data={penaltiesData} formFields={formFields} />;
};


// --- Main App Component ---
const App = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const [activePage, setActivePage] = React.useState('Dashboard');

  const onCollapse = collapsed => {
    setCollapsed(collapsed);
  };

  const handleMenuClick = e => {
    setActivePage(e.key);
  };

  const pageComponents = {
    'Dashboard': <Dashboard />,
    'Books': <Books />,
    'Books Circulation': <BooksCirculation />,
    'Members': <Members />,
    'Genres': <Genres />,
    'Authors': <Authors />,
    'Publishers': <Publishers />,
    'Book Languages': <BookLanguages />,
    'Tags': <Tags />,
    'Users': <Users />,
    'Roles': <Roles />,
    'Membership Plans': <MembershipPlans />,
    'Subscriptions': <Subscriptions />,
    'Books Series': <BooksSeries />,
    'Book Requests': <BookRequests />,
    'Penalties': <Penalties />,
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div
          style={{
            height: "32px",
            margin: "16px",
            background: "rgba(255, 255, 255, 0.2)",
            textAlign: "center",
            lineHeight: "32px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          {collapsed ? "LMS" : "Library System"}
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["Dashboard"]}
          mode="inline"
          onClick={handleMenuClick}
        >
          <Menu.Item key="Dashboard" icon={<DashboardOutlined />}>
            Dashboard
          </Menu.Item>

          <SubMenu key="sub1" icon={<BookOutlined />} title="Catalog">
            <Menu.Item key="Books" icon={<BookFilled />}>
              Books
            </Menu.Item>
            <Menu.Item key="Authors" icon={<UserSwitchOutlined />}>
              Authors
            </Menu.Item>
            <Menu.Item key="Genres" icon={<UnorderedListOutlined />}>
              Genres
            </Menu.Item>
            <Menu.Item key="Publishers" icon={<ContainerOutlined />}>
              Publishers
            </Menu.Item>
            <Menu.Item key="Book Languages" icon={<GlobalOutlined />}>
              Languages
            </Menu.Item>
            <Menu.Item key="Books Series" icon={<OrderedListOutlined />}>
              Book Series
            </Menu.Item>
            <Menu.Item key="Tags" icon={<TagsOutlined />}>
              Tags
            </Menu.Item>
          </SubMenu>

          <SubMenu key="sub2" icon={<SolutionOutlined />} title="Circulation">
            <Menu.Item key="Books Circulation" icon={<ScheduleOutlined />}>
              Circulation Log
            </Menu.Item>
            <Menu.Item key="Book Requests" icon={<QuestionCircleOutlined />}>
              Book Requests
            </Menu.Item>
            <Menu.Item key="Penalties" icon={<StopOutlined />}>
              Penalties
            </Menu.Item>
          </SubMenu>

          <SubMenu key="sub3" icon={<TeamOutlined />} title="Members">
            <Menu.Item key="Members" icon={<UsergroupAddOutlined />}>
              Members List
            </Menu.Item>
            <Menu.Item key="Membership Plans" icon={<IdcardOutlined />}>
              Membership Plans
            </Menu.Item>
            <Menu.Item key="Subscriptions" icon={<CrownOutlined />}>
              Subscriptions
            </Menu.Item>
          </SubMenu>

          <SubMenu key="sub4" icon={<SettingOutlined />} title="System">
            <Menu.Item key="Users" icon={<UserOutlined />}>
              Users
            </Menu.Item>
            <Menu.Item key="Roles" icon={<ApartmentOutlined />}>
              Roles
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>

      {/* Main Layout */}
      <Layout className="site-layout h-full" style={{ display: "flex", flexDirection: "column" }}>
        <Header
          className="site-layout-background"
          style={{ padding: "5px", background: "#fff", height: "50px", alignItems: 'center', display: 'flex', }}
        >
          <span style={{ fontSize: "24px", fontWeight: "bold" }}>{activePage}</span>
        </Header>

        {/* Content takes remaining height */}
        <Content style={{ margin: "0 16px", height: 'calc(100vh - 90px)' }}>
          <Breadcrumb style={{ height: "40px", lineHeight: "40px" }}>
            <Breadcrumb.Item>Library</Breadcrumb.Item>
            <Breadcrumb.Item>{activePage}</Breadcrumb.Item>
          </Breadcrumb>

          {/* Scrollable section */}
          <div
            className="site-layout-background content-section"
            style={{
              height: 'calc(100vh - 90px - 48px)',
              padding: 24,
              background: "#fff",
              overflowY: "auto",
              // i want to hide scrollbar
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {pageComponents[activePage]}
          </div>
        </Content>

        <Footer style={{ textAlign: "center", height: "40px", display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          Library Management System ©2024 Created with Ant Design
        </Footer>
      </Layout>
    </Layout>
  );

};

export default App;

