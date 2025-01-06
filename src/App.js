import React, { useState, useEffect } from 'react';
import ShoppingList from './components/ShoppingList';
import { TextField, Button, Box, Typography } from '@mui/material';

const App = () => {
  const loadItemsFromLocalStorage = () => {
    const savedItems = localStorage.getItem('shoppingItems');
    return savedItems ? JSON.parse(savedItems) : [];
  };

  const [items, setItems] = useState(loadItemsFromLocalStorage);
  const [newItemName, setNewItemName] = useState('');
  const [newItemAmount, setNewItemAmount] = useState('');

  useEffect(() => {
    localStorage.setItem('shoppingItems', JSON.stringify(items));
  }, [items]);

  const addItem = () => {
    if (newItemName && newItemAmount) {
      const newItem = {
        id: Date.now(),
        name: newItemName,
        amount: parseInt(newItemAmount),
      };
      setItems([...items, newItem]);
      setNewItemName('');
      setNewItemAmount('');
    }
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const updateItem = (id, newAmount) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, amount: parseInt(newAmount, 10) } : item
      )
    );
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f9f9f9',
        padding: 3,
      }}
    >
      <Typography variant="h3" gutterBottom>
        Time to Go Shopping !!
      </Typography>″

      {/* Input section */}
          <Box
      sx={{
        display: 'flex',
        gap: 2,
        marginBottom: 3,
        width: '100%',
        maxWidth: '600px', // Adjust width of the input section
      }}
    >
      <TextField
        fullWidth
        label="Item Name"
        variant="outlined"
        value={newItemName}
        onChange={(e) => setNewItemName(e.target.value)}
      />
      <TextField
        fullWidth
        label="Amount"
        variant="outlined"
        type="number"
        value={newItemAmount}
        onChange={(e) => setNewItemAmount(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={addItem}
        sx={{
          height: '56px', // Same as the default height of MUI TextField
          minWidth: '120px', // Slightly wider button
        }}
      >
        Add Item
      </Button>
    </Box>


      {/* Shopping list */}
      <Box sx={{ width: '100%', maxWidth: '800px' }}> {/* Adjust list width */}
        <ShoppingList
          items={items}
          deleteItem={deleteItem}
          updateItem={updateItem}
        />
      </Box>
    </Box>
  );
};

export default App;
