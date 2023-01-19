import React, { useState } from 'react';

function getSum(arr) {
  let sum = 0;

  for (const elem of arr) {
    sum += +elem;
  }

  return sum;
}

function Seven() {
  const [notes, setNotes] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  function changeHandler(index, event) {
    setNotes([...notes.slice(0, index), event.target.value, ...notes.slice(index + 1)]);
  }

  return (
    <div>
      <input value={notes[0]} onChange={(event) => changeHandler(0, event)} />
      <input value={notes[1]} onChange={(event) => changeHandler(1, event)} />
      <input value={notes[2]} onChange={(event) => changeHandler(2, event)} />
      <input value={notes[3]} onChange={(event) => changeHandler(3, event)} />
      <input value={notes[4]} onChange={(event) => changeHandler(4, event)} />
      <input value={notes[5]} onChange={(event) => changeHandler(5, event)} />
      <input value={notes[6]} onChange={(event) => changeHandler(6, event)} />
      <input value={notes[7]} onChange={(event) => changeHandler(7, event)} />
      <input value={notes[8]} onChange={(event) => changeHandler(8, event)} />

      {getSum(notes) / 9}
    </div>
  );
}

export default Seven;
