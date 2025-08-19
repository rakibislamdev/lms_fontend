import React, { useEffect, useState } from 'react';
import MainLayout from '../components/Layout/MainLayout';
import api from '../api/axios';
import { Table, Button, Modal, Form, Select, DatePicker, message, Input, Popconfirm } from 'antd';

export default function Transactions() {
  const [tx, setTx] = useState([]);
  const [books, setBooks] = useState([]);
  const [members, setMembers] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const load = async () => {
    try {
      setLoading(true);
      const t = await api.get('/transactions');
      setTx(t.data);
      const b = await api.get('/books');
      setBooks(b.data);
      const m = await api.get('/members');
      setMembers(m.data);
    } catch (err) {
      message.error('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  // When memberId changes, update memberName field automatically
  const onMemberIdChange = (e) => {
    const id = e.target.value;
    const member = members.find((m) => m.memberId === id);
    if (member) {
      form.setFieldsValue({ memberName: member.name });
    } else {
      form.setFieldsValue({ memberName: '' });
    }
  };

  const issue = async (vals) => {
    try {
      await api.post('/transactions/issue', {
        bookId: vals.bookId,
        memberName: vals.memberName,
        memberId: vals.memberId,
        dueDate: vals.dueDate.format('YYYY-MM-DD'),
      });
      message.success('Book issued successfully');
      setOpen(false);
      form.resetFields();
      load();
    } catch (err) {
      message.error(err.response?.data?.message || 'Failed to issue book');
    }
  };

  const returnBook = async (id) => {
    try {
      await api.post(`/transactions/${id}/return`);
      message.success('Book returned successfully');
      load();
    } catch (err) {
      message.error('Failed to return book');
    }
  };

  const cols = [
    { title: 'Book', dataIndex: ['book', 'title'], key: 'book' },
    { title: 'Member', dataIndex: 'memberName', key: 'member' },
    {
      title: 'Issue Date',
      dataIndex: 'issueDate',
      key: 'issueDate',
      render: (d) => (d ? new Date(d).toLocaleDateString() : ''),
    },
    {
      title: 'Due Date',
      dataIndex: 'dueDate',
      key: 'dueDate',
      render: (d) => (d ? new Date(d).toLocaleDateString() : ''),
    },
    { title: 'Status', dataIndex: 'status', key: 'status' },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <>
          {record.status === 'issued' && (
            <Popconfirm
              title="Confirm return of this book?"
              onConfirm={() => returnBook(record._id)}
              okText="Yes"
              cancelText="No"
            >
              <Button type="primary">Return</Button>
            </Popconfirm>
          )}
        </>
      ),
    },
  ];

  return (
    <MainLayout>
      <Button type="primary" onClick={() => setOpen(true)} style={{ marginBottom: 16 }}>
        Issue Book
      </Button>
      <Table dataSource={tx} columns={cols} rowKey="_id" loading={loading} />

      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        title="Issue Book"
        destroyOnHidden
      >
        <Form form={form} onFinish={issue} layout="vertical">
          <Form.Item
            label="Book"
            name="bookId"
            rules={[{ required: true, message: 'Please select a book' }]}
          >
            <Select
              options={books.map((b) => ({ label: b.title, value: b._id }))}
              placeholder="Select a book"
              showSearch
              filterOption={(input, option) =>
                option.label.toLowerCase().includes(input.toLowerCase())
              }
            />
          </Form.Item>

          <Form.Item
            label="Member ID"
            name="memberId"
            rules={[{ required: true, message: 'Please enter member ID' }]}
          >
            <Input placeholder="Enter member ID" onChange={onMemberIdChange} />
          </Form.Item>

          <Form.Item label="Member Name" name="memberName">
            <Input placeholder="Member name will auto-fill" disabled />
          </Form.Item>

          <Form.Item
            label="Due Date"
            name="dueDate"
            rules={[{ required: true, message: 'Please select due date' }]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit" type="primary" block>
              Issue
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </MainLayout>
  );
}
