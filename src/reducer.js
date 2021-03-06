export const initialState = {
  cart: [],
  user: null
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
      // copy of current cart
      let newCart = [...state.cart];
      
      // go to copy of cart and splice at the index point. only display items in cart minus specific index, and shift all other items down an index spot 
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
    case 'EMPTY_CART':
      return {
        ...state,
        cart: []
      };
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      };
    default:
      return state
  };
};