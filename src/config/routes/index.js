import React, {Fragment, Component} from 'react';
import { BrowserRouter as Router , Routes as Switch, Route } from 'react-router-dom';
import {Home, Login, Register} from '../../pages';

class Routes extends Component {
    render() {
        return (
            <Fragment>
                <Router>
                    <Switch>
                        <Route exact path="/" element={<Home />}></Route>
                        <Route exact path="/login" element={<Login />}></Route>
                        <Route exact path="/register" element={<Register />}></Route>
                    </Switch>
                </Router>
            </Fragment>
        )
    }
}

export default Routes;
