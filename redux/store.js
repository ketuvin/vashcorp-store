import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
// INSERT IMPORT SLICES HERE
import productSlice from "./slices/product.slice";

const combinedReducer = combineReducers({
    // INSERT REDUCERS HERE
    products: productSlice.reducer
});

const rootReducer = (state, action) => {
    return combinedReducer(state, action);
};

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
});

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);

export default store;
