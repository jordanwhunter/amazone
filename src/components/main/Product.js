// Dependencies
import React from 'react';
import { useStateValue } from '../../contexts/StateContext';

// Icons

// Styles
import '../../styles/main/Product.css';

export default function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();

  console.log('cart contains:', state.cart)

  const addToCart = () => {
    // dispatch item into data layer
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: id,
        title: title, 
        image: image,
        price: price,
        rating: rating
      }
    })
  };
  
  return (
    <div className='product'>
      <div className='product-info'>
        {/* Title */}
        <p>{title}</p>

        <p className='product-price'>
          {/* Price */}
          <small>$</small>
          <strong>{price}</strong>
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
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  )
};
