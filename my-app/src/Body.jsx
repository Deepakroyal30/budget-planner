import React, { useState } from 'react';
import './Body.css';

function Body() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, { text: inputValue, checked: false }]);
      setInputValue('');
      setTimeout(() => {
        alert('Item added!');
      }, 100); // Ensuring the alert appears after the state update
    }
  };

  const handleToggleCheck = (index) => {
    const updatedItems = [...items];
    updatedItems[index].checked = !updatedItems[index].checked;
    setItems(updatedItems);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    setTimeout(() => {
      alert('Item deleted!');
    }, 100);
  };

  return (
    <div>
      <div className="boxcontainer">
      <h2>Grocery Bud</h2>
      <div className="input">
        <input 
          type="text" 
          value={inputValue} 
          onChange={handleInputChange} 
        />
        <button onClick={handleAddItem}>Add item</button>
      </div>
      <div className="itemList">
        {items.map((item, index) => (
          <div className='itemList2' key={index}>
            <input 
              type="checkbox" 
              checked={item.checked} 
              onChange={() => handleToggleCheck(index)} 
            />
            <span style={{ textDecoration: item.checked ? 'line-through' : 'none' }}>
              {item.text}
            </span>
            <button onClick={() => handleDeleteItem(index)}>Delete</button>
          </div>
          
        ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
