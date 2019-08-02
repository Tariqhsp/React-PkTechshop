import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProductsAction } from '../../actions/fetchProductsAction';

class Shop extends Component {
    componentWillMount() {
        this.props.fetchProductsAction();
    }
    render() {
        console.log(this.props.products);
        return (
            <div>

            </div>
        )
    }
}
const mapStateToProps = state => ({
    products: state.products.items,
})
export default connect(mapStateToProps, { fetchProductsAction })(Shop);
