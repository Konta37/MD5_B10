const randomReducer = (state = [], action) => {
  switch (action.type) {
    case "random":
      const newState = [...state, action.payload];
      return newState;
    default:
      return state;
  }
};

export default randomReducer;
