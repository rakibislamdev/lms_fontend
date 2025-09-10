import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, DatePicker, Form, Input, Modal, Select, Space, Table } from 'antd';
import React, { memo } from 'react';
import CrudModal from './CrudModal';
const { Option } = Select;
const GenericCrudPage = memo(({ pageTitle, columns, data, formFields }) => {
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
});

export default GenericCrudPage;