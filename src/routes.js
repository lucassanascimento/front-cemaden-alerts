import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Register from './pages/Register';
import ThankYou from './pages/ThankYou';

export default function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Register} />
                <Route path="/thankyou" component={ThankYou}/>
            </Switch>
        </BrowserRouter>
    );
}