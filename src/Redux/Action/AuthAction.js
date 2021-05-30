export const AddAuthUser = (payload) => {
  return {
    type: 'ADD_AUTH_USER',
    payload,
  };
};

export const RemoveAuthUser = (payload) => {
  return {
    type: 'REMOVE_AUTH_USER',
    payload,
  };
};
