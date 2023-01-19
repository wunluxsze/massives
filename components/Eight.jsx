import React, { useState } from 'react';

function Eight() {
  const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
  const [editNum, setEditNum] = useState(null);

  const result = notes.map((note, index) => {
    return (
      <li key={index}>
        {note}
        <button onClick={() => setEditNum(index)}>edit</button>
      </li>
    );
  });

  function changeItem(event) {
    setNotes([...notes.slice(0, editNum), event.target.value, ...notes.slice(editNum + 1)]);
  }

  return (
    <ul>
      {result}
      <input
        value={typeof editNum == 'number' ? notes[editNum] : ''}
        onChange={changeItem}
        onBlur={() => setEditNum(null)}
      />
    </ul>
  );
}

export default Eight;
