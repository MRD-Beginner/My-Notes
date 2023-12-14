import React from 'react';

const DeleteButton = ({ id, onDelete }) => {
  const buttonText = 'Hapus';

  return (
    <button
      className="note__button--delete"
      onClick={() => onDelete(id)}
    >
      {buttonText}
    </button>
  );
};

export default DeleteButton;
