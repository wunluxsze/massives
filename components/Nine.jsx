import React, { useState } from 'react';

function Nine() {
  const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
  const [editNum, setEditNum] = useState(null);
  const [value, setValue] = useState('');

  const result = notes.map((note, index) => {
    return (
      <p key={index} onClick={() => setEditNum(index)}>
        {note}
      </p>
    );
  });

  function changeItem(event) {
    setNotes([...notes.slice(0, editNum), event.target.value, ...notes.slice(editNum + 1)]);
  }
  function stopEdit(event) {
    setEditNum(null);
  }

  function changeValue(event) {
    setValue(event.target.value);
  }
  function addItem(event) {
    setNotes([...notes, value]);
  }

  let input;
  if (editNum) {
    input = <input value={notes[editNum]} onChange={changeItem} onBlur={stopEdit} />;
  } else {
    input = <input value={value} onChange={changeValue} onBlur={addItem} />;
  }

  return (
    <div>
      {result}
      {input}
    </div>
  );
}

export default Nine;
