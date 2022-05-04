import { createStore, combineReducers } from "redux";
import { userReducer, nodeReducer } from "./reducers";

const reducer = combineReducers({ user: userReducer, node: nodeReducer });

const store = createStore(reducer);
export default store;
