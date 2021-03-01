export const initialState = {
  cart: [],
};

export default function reducer(state, action) {
  const { type, item } = action
  // console.log(action)

  switch (type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, item],
      }
    default:
      return state
  }
};