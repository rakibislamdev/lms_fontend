// import React, { useEffect, useState } from 'react';
// import MainLayout from '../components/Layout/MainLayout';
// import api from '../api/axios';
// import { Table, Button, Modal, Form, Input, message, Popconfirm } from 'antd';

// export default function Members() {
//   const [list, setList] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [editing, setEditing] = useState(null);
//   const [form] = Form.useForm();

//   const load = async () => {
//     try {
//       const res = await api.get('/members');
//       setList(res.data);
//     } catch (err) {
//       message.error('Failed to load members');
//     }
//   };

//   useEffect(() => {
//     load();
//   }, []);

//   const openModal = (m) => {
//     setEditing(m || null);
//     form.resetFields();
//     if (m) form.setFieldsValue(m);
//     setOpen(true);
//   };

//   const save = async (vals) => {
//     try {
//       if (editing) {
//         await api.put(`/members/${editing._id}`, vals);
//       } else {
//         await api.post('/members', vals);
//       }
//       message.success('Saved successfully');
//       setOpen(false);
//       load();
//     } catch (err) {
//       message.error(err.response?.data?.message || 'Save failed');
//     }
//   };

//   const remove = async (id) => {
//     try {
//       await api.delete(`/members/${id}`);
//       message.success('Deleted successfully');
//       load();
//     } catch (err) {
//       message.error('Delete failed');
//     }
//   };

//   const cols = [
//     { title: 'Name', dataIndex: 'name', key: 'name' },
//     { title: 'Email', dataIndex: 'email', key: 'email' },
//     { title: 'Phone', dataIndex: 'phone', key: 'phone' },
//     { title: 'Member ID', dataIndex: 'memberId', key: 'memberId' },
//     {
//       title: 'Actions',
//       key: 'actions',
//       render: (_, record) => (
//         <>
//           <Button onClick={() => openModal(record)}>Edit</Button>
//           <Popconfirm
//             title="Are you sure to delete this member?"
//             onConfirm={() => remove(record._id)}
//             okText="Yes"
//             cancelText="No"
//           >
//             <Button danger style={{ marginLeft: 8 }}>Delete</Button>
//           </Popconfirm>
//         </>
//       ),
//     },
//   ];

//   return (
//     <MainLayout>
//       <Button type="primary" onClick={() => openModal(null)} style={{ marginBottom: 16 }}>
//         Add Member
//       </Button>

//       <Table dataSource={list} columns={cols} rowKey="_id" />

//       <Modal
//         open={open}
//         onCancel={() => setOpen(false)}
//         footer={null}
//         title={editing ? 'Edit Member' : 'Add Member'}
//         destroyOnHidden
//       >
//         <Form form={form} onFinish={save} layout="vertical">
//           <Form.Item
//             label="Name"
//             name="name"
//             rules={[{ required: true, message: 'Please enter member name' }]}
//           >
//             <Input placeholder="Enter member name" />
//           </Form.Item>

//           <Form.Item
//             label="Email"
//             name="email"
//             rules={[
//               { type: 'email', message: 'Please enter a valid email' },
//               { required: true, message: 'Please enter email' },
//             ]}
//           >
//             <Input placeholder="Enter email address" />
//           </Form.Item>

//           <Form.Item
//             label="Phone"
//             name="phone"
//             rules={[{ required: true, message: 'Please enter phone number' }]}
//           >
//             <Input placeholder="Enter phone number" />
//           </Form.Item>

//           <Form.Item>
//             <Button htmlType="submit" type="primary" block>
//               Save
//             </Button>
//           </Form.Item>
//         </Form>
//       </Modal>
//     </MainLayout>
//   );
// }

import React, { memo } from 'react';
import GenericCrudPage from '../components/Common/GenericCrudPage';
import { membersData, plansData } from '../helpers/data';
import { Tag } from 'antd';

const Members = memo(() => {
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
});

export default Members;
