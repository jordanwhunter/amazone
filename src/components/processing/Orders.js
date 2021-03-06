// Dependencies
import React, { useEffect } from 'react';
import { useStateIfMounted } from 'use-state-if-mounted';
import { db } from '../../firebase';
import { useStateValue } from '../../contexts/StateContext';
import Header from '../main/Header';
import Order from '../processing/Order';

// Styles
import '../../styles/processing/Orders.css';

export default function Orders() {
  const [orders, setOrders] = useStateIfMounted([]);
  
  const [{ user }] = useStateValue();

  useEffect(() => {
    if (user) {
      db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot(snapshot => {
          setOrders(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          })))
        });
    } else {
      setOrders([])
    }
  }, [user])

  return (
    <>
      <Header />
      <div className='orders'>
        <h1>Your Orders:</h1>
        <div className='orders-order'>
          {
            orders?.map(order => (
              <Order order={order} />
            ))
          }
        </div>
      </div>
    </>
  )
};