import React, { useState } from 'react';
import NoteHeader from './NoteHeader';
import NoteMain from './NoteMain';

const NoteApp = () => {
  const [searchTitle, setSearchTitle] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTitle(event.target.value);
  };

  return (
    <>
      <NoteHeader searchTitle={searchTitle} onSearch={handleSearch} />
      <NoteMain searchTitle={searchTitle} />
    </>
  );
};

export default NoteApp;
