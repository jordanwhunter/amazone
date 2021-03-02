// Dependencies
import React from 'react';
import { useStateValue } from '../../contexts/StateContext';

// Styles
import '../../styles/cart/CheckoutProduct.css';

export default function CheckoutProduct({ id, title, image, price, rating }) {
  const [dispatch] = useStateValue();
  
  const removeFromCart = () => {
    // remove item from cart itself
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id,
    })
  };
  
  return (
    <div className='checkout-product'>
      
      <img
        className='checkout-product-image'
        src={image} 
        alt={title}
      />
      <div className='checkout-product-info'>
        <p className='checkout-product-title'>{title}</p>
        <p className='checkout-product-price'>
          {
            price && 
            <>
              <small>$</small>
              <strong>{price}</strong>
            </>
          }
        </p>
        <div className='checkout-product-rating'>
          <small>
            <p>{'⭐️'.repeat(rating)}</p>
          </small>
        </div>
        {title && <button onClick={removeFromCart}>Remove from Cart</button>}
      </div>
    </div>
  )
};