import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    product: [],
    variantName: "BLUE",
    variantMemory: "32GB",
    variantPrice: "2700"
}

const productSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        setProduct: (state, action) => {
            return { ...state, product: action.payload };
        },
        setVariantName: (state, action) => {
            return { ...state, variantName: action.payload };
        },
        setVariantMemory: (state, action) => {
            return { ...state, variantMemory: action.payload };
        },
        setVariantPrice: (state, action) => {
            return { ...state, variantPrice: action.payload };
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