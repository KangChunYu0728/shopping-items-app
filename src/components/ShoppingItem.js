import React, { useState } from 'react';

const ShoppingItem = ({ item, updateItem, deleteItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(item.name);
  const [editedAmount, setEditedAmount] = useState(item.amount);

  const handleUpdate = () => {
    updateItem(item.id, { id: item.id, name: editedName, amount: editedAmount });
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <input
            type="number"
            value={editedAmount}
            onChange={(e) => setEditedAmount(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <span>
            {item.name} - {item.amount}
          </span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default ShoppingItem;
