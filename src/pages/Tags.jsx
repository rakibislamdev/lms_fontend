import React, { memo } from 'react';
import { tagsData } from '../helpers/data';
import GenericCrudPage from '../components/Common/GenericCrudPage';

const Tags = memo(() => {
    return <GenericCrudPage pageTitle="Tags" columns={[{ title: 'Name', dataIndex: 'name', key: 'name' }]} data={tagsData} formFields={[{ name: 'name', label: 'Tag Name', placeholder: 'Enter tag name' }]} />;
});

export default Tags;