import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import randomReducer from "./randomReducer";

// Gộp tất cả reducer của ứng dụng
const rootReducers = combineReducers({
  counter: counterReducer,
  random: randomReducer,
});

export default rootReducers;