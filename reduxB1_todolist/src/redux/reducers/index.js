import { combineReducers } from "redux";
import todoListReducer from "./todoList";

const rootReducers = combineReducers({
    todolist: todoListReducer,
})

export default rootReducers;