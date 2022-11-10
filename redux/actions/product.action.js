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

export const checkVariant = (operation = null) => {
    return (dispatch, getState) => {
        const {
            product,
            variantName,
            variantMemory
        } = getState().products;

        const { variants } = product;
        
        try {
            const result = variants.filter((variant) => variant.options.color == variantName && variant.options.memory == variantMemory);
            console.log(result);
            if (result.length !== 0) {
                dispatch(productActions.setVariantPrice(result[0].price));
            }

            return Promise.resolve(result);
        } catch (err) {
            return Promise.resolve(err);
        }
    }
};