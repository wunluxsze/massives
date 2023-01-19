import React, { useState } from 'react';

function Six() {
  const [notes, setNotes] = useState([1, 2, 3, 4, 5]);

  const result = notes.map((note, index) => {
    return (
      <p key={index}>
        {note}
        <button onClick={() => remItem(index)}></button>
      </p>
    );
  });

  function remItem(index) {
    setNotes([...notes.slice(0, index), ...notes.slice(index + 1)]);
  }

  return <div>{result}</div>;
}

export default Six;
