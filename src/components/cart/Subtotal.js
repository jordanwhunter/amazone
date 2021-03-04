// Dependencies
import React from 'react';
import { useHistory } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../contexts/StateContext';
import { getCartTotal } from '../../reducer';

// Styles
import '../../styles/cart/Subtotal.css';

export default function Subtotal() {
  const [state] = useStateValue();
  const { cart } = state;

  const history = useHistory();

  return (
    <div className='subtotal'>
      <CurrencyFormat
        // value acts as a render prop
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart?.length} items):
              <strong>{value}</strong>
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
      
      <button onClick={event => history.push('/payment')}>Proceed to Checkout</button>
    </div>
  )
};