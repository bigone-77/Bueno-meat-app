import { combineReducers } from "@reduxjs/toolkit";
import currentUserReducer from "./slices/currentUserSlice";
import editUserReducer from "./slices/memberEditSlice";
import productReducer from "./slices/productSlice";

const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    editUser: editUserReducer,
    product: productReducer
});

export default rootReducer;
