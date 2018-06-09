export default (state = {}, action) => {
  switch (action.type) {
    case 'SUPPORT_NAME':
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

