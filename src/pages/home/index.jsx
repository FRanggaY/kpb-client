import React, { Component, Fragment } from 'react';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <h1>Ini adalah landing page</h1>
                <nav>
                    <ul>
                        <li>Logo</li>
                        <li>Home</li>
                        <li>Test doang artikel</li>
                        <li>About</li>
                    </ul>
                    <ul>
                        <li>Login</li>
                        <li>Register</li>\
                    </ul>
                </nav>
                <main>
                    <div>
                        <ul>
                            <li>foto</li>
                        </ul>
                        <ul>
                            <li>ini adalah hero section</li>
                        </ul>
                    </div>
                    <div>
                        card kelebihan ldlalfsa
                    </div>
                </main>
                <footer>
                   <ul>
                       <li>tulisan KPB</li>
                   </ul>
                   <ul>
                       <li>footer pencet</li>
                   </ul>
                   <div>
                       <ul>
                           <li>@2022 KPB dll</li>
                       </ul>
                       <ul>
                           <li>fb, yt, ig dll</li>
                       </ul>
                   </div>
                </footer>
            </Fragment>
        )
    }
}

export default Home;
