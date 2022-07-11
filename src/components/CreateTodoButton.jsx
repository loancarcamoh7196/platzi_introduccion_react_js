import React from 'react';
import '../style/CreateTodoButton.css';

function CreateTodoButton(props) {

  const handleAdd = (msg) => {
    alert(msg);
  }

  return (
    <button
      className='CreateTodoButton'
      onClick={()=>handleAdd('Hola Tu')}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
