import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import MenuItem from './MenuItem';

function Menu() {
  const { vendor } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    // TODO: Fetch menu from backend using vendor
    setItems([
      { id: 1, name: 'Veg Sandwich', price: 40, image: '/images/sandwich.jpg' },
      { id: 2, name: 'Cold Coffee', price: 50, image: '/images/coffee.jpg' },
      { id: 3, name: 'Maggie Special', price: 45, image: '/images/maggie.jpg' }
    ]);
  }, [vendor]);

  const addToCart = useCallback((item) => {
    alert(`Added ${item.name} to cart`);
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-capitalize">{vendor} Menu</h2>

      <div className="row mt-3" role="list">
        {items.map((item) => (
          <div key={item.id} className="col-md-4">
            <MenuItem item={item} onAddToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
