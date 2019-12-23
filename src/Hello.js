import React, { useState, useEffect, useRef } from 'react';
import './styles.css';

export const Hello = () => {
  const t = useRef(null);
  const [name, setName] = useState("ajanuw");
  useEffect(() => {
    t.current = name;
    console.log(t);
  });
  const prevName = t.current;
  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <h2>{name}</h2>
      <p>{prevName}</p>
    </div>
  );
}

export default Hello;
