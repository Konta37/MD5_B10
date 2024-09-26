const todoListReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      const newState = [...state, action.payload];
      return newState;
    case "editstatus":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, status: action.payload.status }
          : todo
      );
    case "delete":
      return state.filter((todo) => todo.id !== action.payload.id);
    case "saveedit":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              name: action.payload.name,
              status: action.payload.status,
            } // Fixed 'staus' to 'status'
          : todo
      );
    default:
      return state;
  }
};

export default todoListReducer;
