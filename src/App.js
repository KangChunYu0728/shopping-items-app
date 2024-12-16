import React, { useState, useEffect } from 'react';
import ShoppingList from './components/ShoppingList';
import { TextField, Button } from '@mui/material';

const App = () => {
  // Load initial data from localStorage (if available)
  const loadItemsFromLocalStorage = () => {
    const savedItems = localStorage.getItem('shoppingItems');
    return savedItems ? JSON.parse(savedItems) : [];
  };

  // State to hold items in the shopping list
  const [items, setItems] = useState(loadItemsFromLocalStorage);

  // State to handle the new item input fields
  const [newItemName, setNewItemName] = useState('');
  const [newItemAmount, setNewItemAmount] = useState('');

  // Update localStorage when items state changes
  useEffect(() => {
    localStorage.setItem('shoppingItems', JSON.stringify(items));
  }, [items]); // Runs every time items state changes

  // Add new item to the shopping list
  const addItem = () => {
    if (newItemName && newItemAmount) {
      const newItem = {
        id: Date.now(), // Generate a unique id
        name: newItemName,
        amount: parseInt(newItemAmount),
      };
      setItems([...items, newItem]);
      setNewItemName('');
      setNewItemAmount('');
    }
  };

  // Delete an item by id
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // Update an item's amount
  const updateItem = (id, newAmount) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, amount: parseInt(newAmount, 10) } : item
      )
    );
  };

  return (
    <div>
      {/* Input fields to add a new item */}
      <div>
        <TextField
          label="Item Name"
          variant="outlined"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <TextField
          label="Amount"
          variant="outlined"
          type="number"
          value={newItemAmount}
          onChange={(e) => setNewItemAmount(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={addItem}>
          Add Item
        </Button>
      </div>

      {/* Display the shopping list */}
      <ShoppingList
        items={items}
        deleteItem={deleteItem}
        updateItem={updateItem}
      />
    </div>
  );
};

export default App;
