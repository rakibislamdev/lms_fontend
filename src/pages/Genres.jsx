import React, { memo } from 'react';
import { genresData } from '../helpers/data';
import GenericCrudPage from '../components/Common/GenericCrudPage';

const Genres = memo(() => {
    return <GenericCrudPage pageTitle="Genres" columns={[{ title: 'Name', dataIndex: 'name', key: 'name' }]} data={genresData} formFields={[{ name: 'name', label: 'Genre Name', placeholder: 'Enter genre name' }]} />;
});

export default Genres;