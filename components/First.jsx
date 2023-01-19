import React from 'react';
import { useState } from 'react';

function First() {
  const [notes, setNotes] = useState([1, 2, 3, 4]);

  const result = notes.map((note, index) => {
    return <p key={index}>{note}</p>;
  });

  return (
    <div>
      <p>{result}</p>
      <button onClick={() => setNotes([...notes, 6])}>ty</button>
    </div>
  );
}

export default First;
