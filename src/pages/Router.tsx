import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Cards from './Cards/Cards';

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" >
                    <Redirect to="/cards" />
                </Route>
                <Route exact path="/cards" component={Cards} />
            </Switch>
        </BrowserRouter>
    )
}