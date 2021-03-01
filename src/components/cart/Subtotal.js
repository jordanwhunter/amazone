// Dependencies
import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../contexts/StateContext';
import { getCartTotal } from '../../reducer';

// Styles
import '../../styles/cart/Subtotal.css';

export default function Subtotal() {
  const [state] = useStateValue();
  const { cart } = state;

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart?.length} items):
              <strong>{` ${value}`}</strong>
            </p>
            <small className='subtotal-gift'>
              <input type='checkbox' /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      
      <button>Proceed to Checkout</button>
    </div>
  )
};