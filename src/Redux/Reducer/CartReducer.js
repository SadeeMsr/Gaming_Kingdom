import allData from '../../Components/FackData/data.json';

const initialState = {
  CartList: [],
  discoverList: allData,
  finishedList: [],
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART_LIST': {
      const newState = {
        ...state,
        CartList: [...state.CartList, action.payload],
      };
      return newState;
    }
    case 'REMOVE_FROM_CART_LIST': {
      const newState = {
        ...state,
        CartList: state.CartList.filter((b) => b.id !== action.payload),
      };
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default CartReducer;
