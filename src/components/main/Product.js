// Dependencies
import React from 'react';

// Icons

// Styles
import '../../styles/main/Product.css';

export default function Product({ title, image, price, rating }) {
  return (
    <div className='product'>
      <div className='product-info'>
        {/* Title */}
        <p>{title}</p>

        <p className='product-price'>
          {/* Price */}
          <small>$</small><strong>{price}</strong>
        </p>

        <div className='product-rating'>
          {/* Star rating */}
          <p>{'⭐️'.repeat(rating)}</p>
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
