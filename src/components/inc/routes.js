import React from 'react';
import { Route } from 'react-router-dom';
import Home from './../pages/Home';
import Shop from './../pages/Shop';

export default function routes() {
    return (
        <React.Fragment>
            <Route exact path="/" component={Home} />
            <Route path="/shop" component={Shop} />
        </React.Fragment>
    )
}
