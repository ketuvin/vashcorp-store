import { productActions } from "../slices/product.slice";

export const getProduct = (operation = null) => {
    return async (dispatch, getState) => {
        dispatch(productActions.reset());
        
        try {
            const res = await fetch(`https://9xozpkins4.execute-api.ap-southeast-1.amazonaws.com/dev/api/product`);
            const data = await res.json();

            dispatch(productActions.setProduct(data.product));

            return Promise.resolve(data);
        } catch (err) {
            return Promise.resolve(err);
        }
    }
};