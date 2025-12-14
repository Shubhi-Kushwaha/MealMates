import React from 'react';
import PropTypes from 'prop-types';

function Spinner({ size = 'md', className = '' }) {
  const sizeClass = size === 'sm' ? 'spinner-border-sm' : '';
  return (
    <div className={`d-flex align-items-center ${className}`}>
      <div className={`spinner-border ${sizeClass}`} role="status" aria-hidden="true" />
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

Spinner.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
};

export default Spinner;