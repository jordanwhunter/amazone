// Dependencies
import React from 'react';
import CurrencyFormat from 'react-currency-format';
import CheckoutProduct from '../cart/CheckoutProduct';
import moment from 'moment';

// Styles
import '../../styles/processing/Order.css';

export default function Order({ order }) {
  return (
    <div className='order'>
      <h2>Order</h2>
      <p>
        {
          moment
            .unix(order.data.created)
            .format('MMMM Do YYYY, h:mma')
        }
      </p>
      <p className='order-id'>
        <small>{order.id}</small>
      </p>
      {order.data.cart?.map(item => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        // value acts as a render prop
        renderText={(value) => (
          <h3 className='order-total'>Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
    </div>
  )
};