import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const AddItemForm = ({ addItem }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && amount) {
      addItem(name, parseInt(amount));
      setName('');
      setAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Item Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            type="number"
            label="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="primary" fullWidth type="submit">
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddItemForm;
