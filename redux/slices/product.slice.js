import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    product: [],
}

const productSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        setProduct: (state, action) => {
            return { ...state, product: action.payload };
        },

        reset: (state, action) => {
            return {
                ...initialState
            }
        },
    }
});

export const productActions = productSlice.actions;
export default productSlice;