export default (state = {}, action) => {
  switch (action.type) {
    case 'MESSAGE_LIST':
      return { ...state, message: action.payload };
    default:
      return state;
  }
}
