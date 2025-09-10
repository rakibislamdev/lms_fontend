import React, { memo } from 'react';
import GenericCrudPage from '../components/Common/GenericCrudPage';
import { Tag } from 'antd';
const membersData = [
    { key: '1', name: 'Alice Johnson', memberId: 'M001', plan: 'Gold', joinDate: '2023-01-15', status: 'Active' },
    { key: '2', name: 'Bob Smith', memberId: 'M002', plan: 'Silver', joinDate: '2023-02-20', status: 'Active' },
    { key: '3', name: 'Charlie Brown', memberId: 'M003', plan: 'Bronze', joinDate: '2022-11-10', status: 'Expired' },
    { key: '4', name: 'Diana Prince', memberId: 'M004', plan: 'Gold', joinDate: '2023-05-01', status: 'Active' },
];
const booksData = [
    { key: '1', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic', status: 'Available' },
    { key: '2', title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Classic', status: 'Borrowed' },
    { key: '3', title: '1984', author: 'George Orwell', genre: 'Dystopian', status: 'Available' },
    { key: '4', title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance', status: 'Maintenance' },
];
const Penalties = memo(() => {
    const penaltiesData = [{ key: '1', memberName: 'Charlie Brown', bookTitle: 'The Hobbit', amount: '$2.50', reason: 'Late Return', status: 'Paid' }];
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
});

export default Penalties;