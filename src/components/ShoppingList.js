import React from 'react';
import ShoppingItem from './ShoppingItem';

const ShoppingList = ({ items, updateItem, deleteItem }) => {
  return (
    <div>
      {items.length === 0 ? (
        <p>No items in the list</p>
      ) : (
        items.map((item) => (
          <ShoppingItem
            key={item.id}
            item={item}
            updateItem={updateItem}
            deleteItem={deleteItem}
          />
        ))
      )}
    </div>
  );
};

export default ShoppingList;
