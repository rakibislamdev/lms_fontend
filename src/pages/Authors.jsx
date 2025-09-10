import React, { memo } from 'react';
import { authorsData } from '../helpers/data';
import GenericCrudPage from '../components/Common/GenericCrudPage';

const Authors = memo(() => {
    return <GenericCrudPage pageTitle="Authors" columns={[{ title: 'Name', dataIndex: 'name', key: 'name' }]} data={authorsData} formFields={[{ name: 'name', label: 'Author Name', placeholder: 'Enter author name' }]} />;
});

export default Authors;