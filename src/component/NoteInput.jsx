import React, { useState } from 'react';

const NoteInput = ({ addNote }) => {
  const [note, setNote] = useState({
    title: '',
    createdAt: +new Date(),
    body: '',
    charLimit: 50,
  });

  const onTitleChange = (event) => {
    setNote((prevNote) => ({
      ...prevNote,
      title: event.target.value.slice(0, note.charLimit),
    }));
  };

  const onBodyChange = (event) => {
    setNote((prevNote) => ({
      ...prevNote,
      body: event.target.value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addNote(note);
  };

  return (
    <div className="note__input">
      <h2>Buat Catatan</h2>
      <form onSubmit={onSubmit}>
        <p className="note__input--limit">Sisa Karakter: {note.charLimit - note.title.length}</p>
        <input
          className="note__input--title"
          type="text"
          placeholder="Masukkan judul catatan ..."
          value={note.title}
          onChange={onTitleChange}
          required
        />
        <textarea
          className="note__input--body"
          type="text"
          placeholder="Masukkan isi catatan ..."
          value={note.body}
          onChange={onBodyChange}
          required
        />
        <button type="submit" className="btn__submit">
          Buat
        </button>
      </form>
    </div>
  );
};

export default NoteInput;
