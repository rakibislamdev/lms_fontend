import React, { memo } from 'react';
import { booksData, circulationData, membersData } from '../helpers/data';
import { Tag } from 'antd';
import GenericCrudPage from '../components/Common/GenericCrudPage';

const BooksCirculation = memo(() => {
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
});

export default BooksCirculation;