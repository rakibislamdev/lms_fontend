import React, { memo } from 'react';
import GenericCrudPage from '../components/Common/GenericCrudPage';
import { membersData, requestsData } from '../helpers/data';
import { Tag } from 'antd';


const BookRequests = memo(() => {
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
});

export default BookRequests;