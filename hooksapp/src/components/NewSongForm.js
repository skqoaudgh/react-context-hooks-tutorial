import React, { useState } from 'react';

const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Song name:</label>
      <input
        type="text"
        name="name"
        value={title}
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <input type="submit" value="add Song" />
    </form>
  );
};

export default NewSongForm;
