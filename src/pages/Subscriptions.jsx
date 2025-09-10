import React, { memo } from 'react';
import { membersData, plansData, subscriptionsData } from '../helpers/data';
import { Tag } from 'antd';
import GenericCrudPage from '../components/Common/GenericCrudPage';

const Subscriptions = memo(() => {
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
});

export default Subscriptions;