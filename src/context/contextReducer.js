//Reducer is a function that takes in the old state and an function and then return the new state

let transactions;

const contextReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      transactions = state.filter((t) => t.id !== action.payload);
      localStorage.setItem('transactions', JSON.stringify(transactions))
      return transactions;
    case "ADD_TRANSACTION":
      transactions = [action.payload, ...state];

      localStorage.setItem('transactions', JSON.stringify(transactions))
      return transactions;
    default:
      return state;
  }

  //   if (action.type === "DELETE_TRANSACTION") {
  //   } else if (action.type === "ADD_TRANSACTION") {
  //   }
};

export default contextReducer;
