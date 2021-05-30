const displayName = sessionStorage.getItem('displayName');
const email = sessionStorage.getItem('email');
const isLoggedin = sessionStorage.getItem('isLoggedin');

const initialState = {
  Auth: [displayName, email, isLoggedin],
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_AUTH_USER': {
      const newState = {
        ...state,
        Auth: [action.payload.Auth],
      };
      return newState;
    }
    case 'REMOVE_AUTH_USER': {
      sessionStorage.setItem('isLoggedin', '');
      sessionStorage.setItem('displayName', '');
      sessionStorage.setItem('email', '');
      const newState = {
        ...state,
        Auth: [''],
      };
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default AuthReducer;
