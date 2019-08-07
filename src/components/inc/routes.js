import React from 'react';
import { Route } from 'react-router-dom';
import Home from './../pages/Home';
import Shop from './../pages/Shop';
import Product from './../pages/Product';

export default function routes() {
    return (
        <React.Fragment>
            <Route exact path="/" component={Home} />
            <Route path="/shop" component={Shop} />
            <Route path="/product/:slug" component={Product} />
        </React.Fragment>
    )
}
