import React, { useState, useEffect } from 'react';
import ShoppingList from './components/ShoppingList';
import AddItemForm from './components/AddItemForm';

const App = () => {
  // Load items from localStorage or start with an empty array
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem('shoppingItems');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  // Update localStorage whenever `items` changes
  useEffect(() => {
    localStorage.setItem('shoppingItems', JSON.stringify(items));
  }, [items]);

  // Add new item
  const addItem = (name, amount) => {
    setItems([...items, { id: Date.now(), name, amount }]);
  };

  // Update an item
  const updateItem = (id, updatedItem) => {
    setItems(items.map(item => (item.id === id ? updatedItem : item)));
  };

  // Delete an item
  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <AddItemForm addItem={addItem} />
      <ShoppingList items={items} updateItem={updateItem} deleteItem={deleteItem} />
    </div>
  );
};

export default App;
