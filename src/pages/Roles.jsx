import React, { memo } from 'react';
import GenericCrudPage from '../components/Common/GenericCrudPage';
import { rolesData } from '../helpers/data';
import { Tag } from 'antd';

const Roles = memo(() => {
    const columns = [
        { title: 'Role Name', dataIndex: 'name', key: 'name' },
        { title: 'Permissions', dataIndex: 'permissions', key: 'permissions', render: perms => perms.map(p => <Tag key={p}>{p}</Tag>) },
    ];
    const formFields = [
        { name: 'name', label: 'Role Name', placeholder: 'Enter role name' },
        // A real implementation would use a multi-select for permissions
        { name: 'permissions', label: 'Permissions', placeholder: 'Enter permissions (comma-separated)' },
    ];
    return <GenericCrudPage pageTitle="Roles" columns={columns} data={rolesData} formFields={formFields} />;
});

export default Roles;