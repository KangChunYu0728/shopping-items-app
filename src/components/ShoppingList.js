import React, { useState } from 'react';
import { List, ListItem, ListItemText, IconButton, Grid, TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const ShoppingList = ({ items, deleteItem, updateItem }) => {
  // State for handling edit modal
  const [open, setOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [newAmount, setNewAmount] = useState('');

  const handleEditClick = (item) => {
    setEditItem(item);
    setNewAmount(item.amount); // Set initial amount to current value
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditItem(null);
  };

  const handleSave = () => {
    if (editItem) {
      updateItem(editItem.id, newAmount);
    }
    handleClose();
  };

  return (
    <div>
      <List>
        {items.map((item) => (
          <ListItem
            key={item.id}
            sx={{ borderBottom: '1px solid #e0e0e0', padding: 1 }}
          >
            <Grid container alignItems="center">
              <Grid item xs={6}>
                <ListItemText
                  primary={item.name}
                  secondary={`Amount: ${item.amount}`}
                />
              </Grid>
              <Grid item xs={6} textAlign="right">
                <IconButton
                  edge="end"
                  aria-label="edit"
                  onClick={() => handleEditClick(item)}
                >
                  <EditIcon color="primary" />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => deleteItem(item.id)}
                >
                  <DeleteIcon color="error" />
                </IconButton>
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>

      {/* Edit Item Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Item</DialogTitle>
        <DialogContent>
          <TextField
            label="Amount"
            type="number"
            value={newAmount}
            onChange={(e) => setNewAmount(e.target.value)}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ShoppingList;
