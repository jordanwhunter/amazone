// Dependencies
import React from 'react';
import CurrencyFormat from 'react-currency-format';

// Styles
import '../../styles/cart/Subtotal.css';

export default function Subtotal() {
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items):
              <strong>{` ${value}`}</strong>
            </p>
            <small className='subtotal-gift'>
              <input type='checkbox' /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
    </div>
  )
};