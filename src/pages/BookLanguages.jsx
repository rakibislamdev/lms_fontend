import React, { memo } from 'react';
import { languagesData } from '../helpers/data';
import GenericCrudPage from '../components/Common/GenericCrudPage';

const BookLanguages = memo(() => {
    return <GenericCrudPage pageTitle="Book Languages" columns={[{ title: 'Name', dataIndex: 'name', key: 'name' }]} data={languagesData} formFields={[{ name: 'name', label: 'Language Name', placeholder: 'Enter language name' }]} />;
});

export default BookLanguages;