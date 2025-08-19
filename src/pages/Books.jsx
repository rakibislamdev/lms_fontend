import React, { useEffect, useState } from 'react';
import MainLayout from '../components/Layout/MainLayout';
import api from '../api/axios';
import { Table, Button, Modal, Form, Input, InputNumber, message, Popconfirm } from 'antd';

export default function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form] = Form.useForm();

  const load = async () => {
    setLoading(true);
    try {
      const res = await api.get('/books');
      setBooks(res.data);
    } catch (err) {
      message.error('Failed to load books');
    }
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const openModal = (book) => {
    setEditing(book || null);
    form.resetFields();
    if (book) form.setFieldsValue(book);
    setOpen(true);
  };

  const save = async (vals) => {
    try {
      if (editing) {
        await api.put(`/books/${editing._id}`, vals);
      } else {
        await api.post('/books', vals);
      }
      message.success('Book saved successfully');
      setOpen(false);
      load();
    } catch (err) {
      message.error(err.response?.data?.message || 'Error saving book');
    }
  };

  const remove = async (id) => {
    try {
      await api.delete(`/books/${id}`);
      message.success('Book deleted');
      load();
    } catch (err) {
      message.error('Failed to delete');
    }
  };

  const cols = [
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Author', dataIndex: 'author', key: 'author' },
    { title: 'Total Copies', dataIndex: 'totalCopies', key: 'totalCopies' },
    { title: 'Available Copies', dataIndex: 'availableCopies', key: 'availableCopies' },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, r) => (
        <>
          <Button size="small" onClick={() => openModal(r)}>Edit</Button>
          <Popconfirm
            title="Delete book?"
            onConfirm={() => remove(r._id)}
            okText="Yes"
            cancelText="No"
          >
            <Button size="small" danger style={{ marginLeft: 8 }}>Delete</Button>
          </Popconfirm>
        </>
      )
    }
  ];

  return (
    <MainLayout>
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={() => openModal(null)}>Add Book</Button>
      </div>

      <Table
        dataSource={books}
        columns={cols}
        rowKey="_id"
        loading={loading}
      />

      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        title={editing ? 'Edit Book' : 'Add Book'}
        destroyOnHidden={true}
      >
        <Form
          form={form}
          onFinish={save}
          layout="vertical"
        >
          <Form.Item
            label="Book Title"
            name="title"
            rules={[{ required: true, message: 'Please enter the book title' }]}
          >
            <Input placeholder="Enter book title" />
          </Form.Item>

          <Form.Item
            label="Author"
            name="author"
            rules={[{ required: true, message: 'Please enter the author name' }]}
          >
            <Input placeholder="Enter author name" />
          </Form.Item>

          <Form.Item
            label="Total Copies"
            name="totalCopies"
            rules={[{ required: true, message: 'Please enter total copies' }]}
          >
            <InputNumber placeholder="Enter total copies" min={1} style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit" type="primary" block>
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </MainLayout>
  );
}
