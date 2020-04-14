import "./actionTypes.js"

export const addItemToCart = (item) => (dispatch) => {
    dispatch({
        type: ADD_ITEM,
        payload: { item },
    });
}

export const removeItemFromCart = (item) => (dispatch) => {
    dispatch({
        type: REMOVE_ITEM,
        payload: { item },
    });
}

export const checkoutCart = () => (dispatch) => {
    dispatch({
        type: CHECKOUT,
    });
}