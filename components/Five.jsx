import React, { useState } from 'react';

function Five() {
  const [notes, setNotes] = useState(['1', '2', '3']);
  const [value, setValue] = useState('');

  const result = notes.map((note, index) => {
    return <ul key={index}>{note}</ul>;
  });

  return (
    <div>
      <p>{result}</p>
      <input
        value={value}
        onBlur={() => {
          setNotes([...notes, value]);
          setValue('');
        }}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
}

export default Five;
