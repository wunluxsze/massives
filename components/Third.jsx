import React, { useState } from 'react';

function Third() {
  const [notes, setNotes] = useState([1, 2, 3, 4, 5]);

  const result = notes.map((note, index) => {
    return <p key={index}>{note}</p>;
  });
  let index = 3;
  return (
    <div>
      <p>{result}</p>
      <button onClick={() => setNotes([...notes.slice(0, index), '!', ...notes.slice(index + 1)])}>
        ty
      </button>
    </div>
  );
}

export default Third;
