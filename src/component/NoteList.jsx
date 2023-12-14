import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, onDelete, onArchive, searchTitle }) => {
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTitle.toLowerCase())
  );

  return (
    <div className="note__list">
      {filteredNotes.length !== 0 ? (
        filteredNotes.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onArchive={onArchive}
            archived={note.archived}
            {...note}
          />
        ))
      ) : (
        <div className="note__list--empty">Tidak ada catatan</div>
      )}
    </div>
  );
};

export default NoteList;
