import React from 'react';
import { useState } from 'react';

function Fourth() {
  const [notes, setNotes] = useState([1, 2, 3, 4, 5]);

  const result = notes.map((note, index) => {
    return <p key={index}>{note}</p>;
  });

  return (
    <div>
      <p>{result}</p>
      <button onClick={() => setNotes([...notes.sort(), ...notes.reverse()])}>ty</button>
    </div>
  );
}

export default Fourth;
