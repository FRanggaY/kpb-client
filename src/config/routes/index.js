import React, {Fragment, Component} from 'react';
import { BrowserRouter as Router , Routes as Switch, Route } from 'react-router-dom';
import {Home} from '../../pages';

class Routes extends Component {
    render() {
        return (
            <Fragment>
                <Router>
                    <Switch>
                        <Route exact path="/" element={<Home />}></Route>
                    </Switch>
                </Router>
            </Fragment>
        )
    }
}

export default Routes;
