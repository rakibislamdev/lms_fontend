import React, { memo } from 'react';
import { seriesData } from '../helpers/data';
import GenericCrudPage from '../components/Common/GenericCrudPage';

const BooksSeries = memo(() => {
    return <GenericCrudPage pageTitle="Book Series" columns={[{ title: 'Name', dataIndex: 'name', key: 'name' }]} data={seriesData} formFields={[{ name: 'name', label: 'Series Name', placeholder: 'Enter series name' }]} />;
});

export default BooksSeries;