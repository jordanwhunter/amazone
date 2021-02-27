// Dependencies
import React from 'react';

// Icons

// Styles
import '../../styles/main/Product.css';

export default function Product({ title, image, dollars, cents, rating }) {
  return (
    <div className='product'>
      <div className='product-info'>
        {/* Title */}
        <p>{title}</p>

        <p className='product-price'>
          {/* Price */}
          <small>$</small>
          <strong>
            {dollars}
            <sup>
              <small>{cents}</small>
            </sup> 
          </strong>
        </p>

        <div className='product-rating'>
          {/* Star rating */}
          <small>
            <p>{'⭐️'.repeat(rating)}</p>
          </small>
        </div>
      </div>

      {/* Image */}
      <img 
        src={image}
        alt={title}
      />
      {/* Add to cart button */}
      <button>Add to Cart</button>
    </div>
  )
};
