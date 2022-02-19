import React, { Component, Fragment } from 'react';
import NavbarComponent from '../../components/navbar';
import FooterComponent from '../../components/footer';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <NavbarComponent />
                    <main>
                        <div>
                            <ul>
                                <li>foto</li>
                            </ul>
                            <ul>
                                <li>ini adalah hero secstion</li>
                            </ul>
                        </div>
                        <div>
                            card kelebihan ldlalfsa
                        </div>
                    </main>
                <FooterComponent />
            </Fragment>
        )
    }
}

export default Home;
