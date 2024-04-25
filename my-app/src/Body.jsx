import React, { useState } from 'react';
import './Body.css';

function Body() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, { text: inputValue, id: Date.now(), completed: false }]);
      setInputValue('');
    }
  };

  const toggleComplete = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <div className='Box'>
        <h1>Grocery Bud</h1>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addItem}>Add Item</button>
       
        {items.map((item) => (
          <div className='Container' key={item.id}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleComplete(item.id)}
            />
            <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
              {item.text}
            </span>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default Body;
