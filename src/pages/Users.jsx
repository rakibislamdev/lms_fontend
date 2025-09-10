import React, { memo } from 'react';
import GenericCrudPage from '../components/Common/GenericCrudPage';
import { rolesData, usersData } from '../helpers/data';

const Users = memo(() => {
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
});

export default Users;