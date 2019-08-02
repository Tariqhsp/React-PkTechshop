import { fetch_Products } from './types';

export const fetchProductsAction = () => dispatch => {
    fetch('http://tariqdev.com/react-redux-shop/shop.db.json').then(res => res.json()).then(data => dispatch({
        type: fetch_Products,
        products: data,
        })
    );
}
