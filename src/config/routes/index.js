import React, {Fragment, Component} from 'react';
import { BrowserRouter as Router , Routes as Switch, Route, Navigate } from 'react-router-dom';
import {Home, Login, AboutUs, Gallery, Activities, NotFound, Dashboard, Settings, Users,Activity, Profile, ProfileAdmin} from '../../pages';

class Routes extends Component {
    render() {
        return (
            <Fragment>
                <Router>
                    <Switch>
                        {/* Incognito */}
                        <Route exact path="/" element={<Home />}></Route>
                        <Route exact path="/login" element={<Login />}></Route>
                        <Route exact path="/about-us" element={<AboutUs />}></Route>
                        <Route exact path="/gallery" element={<Gallery />}></Route>
                        <Route exact path="/activities" element={<Activities />}></Route>
                        <Route exact path="/profile" element={<Profile />}></Route>
                        {/* <Route exact path="/register" element={<Register />}></Route> */}
                        {/* END Incognito */}

                        {/* ADMIN */}
                        <Route exact path="/admin/dashboard" element={<Dashboard />}></Route>
                        <Route exact path="/admin/settings" element={<Settings />}></Route>
                        <Route exact path="/admin/tables" element={<Users />}></Route>
                        <Route exact path="/admin/activity" element={<Activity/>}></Route>
                        <Route exact path="/admin/profile" element={<ProfileAdmin/>}></Route>
                        <Route path="/admin" element={<Navigate replace to="/admin/dashboard" />} />
                        {/* END ADMIN */}

                        <Route path="*" element={<NotFound />} />
                    </Switch>
                </Router>
            </Fragment>
        )
    }
}

export default Routes;
