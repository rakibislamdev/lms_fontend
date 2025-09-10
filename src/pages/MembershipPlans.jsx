import React, { memo } from 'react';
import { plansData } from '../helpers/data';
import GenericCrudPage from '../components/Common/GenericCrudPage';

const MembershipPlans = memo(() => {
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
});

export default MembershipPlans;