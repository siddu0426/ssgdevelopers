import React from 'react';

function ItemList(props) {
  const items = props.items; // Access the items prop

  return (
    <ul>
      {items.map((item) => (
        <li className='text-4xl' key={item.id}>{item.name}</li> // Use a unique 'key' for each list item
      ))}
    </ul>
  );
}

export default ItemList;