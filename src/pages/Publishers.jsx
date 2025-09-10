import React, { memo } from 'react';
import { publishersData } from '../helpers/data';
import GenericCrudPage from '../components/Common/GenericCrudPage';

const Publishers = memo(() => {
    return <GenericCrudPage pageTitle="Publishers" columns={[{ title: 'Name', dataIndex: 'name', key: 'name' }]} data={publishersData} formFields={[{ name: 'name', label: 'Publisher Name', placeholder: 'Enter publisher name' }]} />;
});

export default Publishers;