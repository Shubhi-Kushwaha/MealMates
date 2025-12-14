import React from 'react';
import PropTypes from 'prop-types';

/**
 * Replace existing MenuItem component with a memoized version.
 * Keeps same props and behavior: (item, onAddToCart)
 */
const MenuItem = React.memo(function MenuItem({ item, onAddToCart }) {
  const handleAdd = React.useCallback(() => {
    onAddToCart(item);
  }, [onAddToCart, item]);

  return (
    <div className="menu-item card my-2" role="listitem" aria-label={`${item.name} menu item`}>
      <img
        src={item.image}
        alt={item.name}
        loading="lazy"
        className="card-img-top"
        style={{ objectFit: 'cover', height: 180 }}
      />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text mb-2">{item.description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <span className="fw-bold">{item.price ? `₹${item.price}` : ''}</span>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleAdd}
            aria-label={`Add ${item.name} to cart`}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
});

MenuItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    image: PropTypes.string,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default MenuItem;