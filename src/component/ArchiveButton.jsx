import React from 'react';

const ArchiveButton = ({ id, onArchive, archived }) => {
  const buttonText = archived ? "Pindahkan" : "Arsipkan";

  return (
    <button
      className="note__button--archive"
      onClick={() => onArchive(id)}
    >
      {buttonText}
    </button>
  );
};

export default ArchiveButton;
