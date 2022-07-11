import React from 'react';
import '../style/TodoSearch.css';

function TodoSearch() {
  const onSearchValueChange = (e) =>{
    console.log(e.target.value)
  }

  return (
    <input className="TodoSearch" placeholder="Cebolla" onChange={onSearchValueChange} />
  );
}

export { TodoSearch };
