export const initialState = {
  cart: [],
};

// Selector
export const getCartTotal = (cart) => 
  cart?.reduce((amount, item) => item.price + amount, 0);

export default function reducer(state, action) {
  const { type, item, id } = action
  // console.log(action)

  switch (type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, item],
      };
    case 'REMOVE_FROM_CART':
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === id
      );
      let newCart = [...state.cart];

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Cannot remove product ID ${id} - does not exist in cart`
        )
      };
      
      return {
        ...state,
        cart: newCart
      };

    default:
      return state
  };
};