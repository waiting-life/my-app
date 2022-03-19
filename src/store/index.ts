import { createStore, combineReducers } from "redux";
import { userReducer, treeReducer } from "./reducers";

const reducer = combineReducers({ user: userReducer, tree: treeReducer });

const store = createStore(reducer);
export default store;
