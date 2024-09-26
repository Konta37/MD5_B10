import { combineReducers } from "redux";
import productReducer from "./ProductReducer";
import cartReducer from "./CartReducer";
import noficationReducer from "./NoficationReducer";

const rootReducers = combineReducers({
    product: productReducer,
    cart: cartReducer,
    nofication: noficationReducer,
})
export default rootReducers;
