import { fetch_Products } from '../../actions/types';
const initState = {
    products: [],
};

export default function productsReducer(state = initState, action) {
    switch (action.type) {
        case fetch_Products:
            return {
                ...state,
                items: action.products
            }

        default:
            return state;
    }
}
