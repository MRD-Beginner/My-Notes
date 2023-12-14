import React from 'react';
import SearchBar from './SearchBar';

const NoteHeader = ({ searchTitle, onSearch }) => (
  <header>
    <div className="note__header container">
      <h1>Notes App.</h1>
      <SearchBar searchTitle={searchTitle} onSearch={onSearch} />
    </div>
  </header>
);

export default NoteHeader;
