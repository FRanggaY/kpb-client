import React, { Component, Fragment } from 'react';
import NavbarComponent from '../../../components/navbar';
import FooterComponent from '../../../components/footer';

class Gallery extends Component {
    render() {
        return (
            <Fragment>
                <NavbarComponent />
                <main>
                    <section className="relative py-5 mt-10">
                        <div className="container mx-auto px-5 lg:px-20">
                            <h6 className="text-left text-xl font-bold py-5">Galeri</h6>
                            <div className="flex gap-10 justify-center flex-wrap">
                                <img className="h-60" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" />
                                <img className="h-60" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" />
                                <img className="h-60" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" />
                            </div>
                            <div className="flex justify-end">
                                <button className="bg-blue-600 rounded text-white font-semibold p-2">Next</button>
                            </div>
                            
                        </div>
                        </section>
                    </main>
                <FooterComponent />
            </Fragment>
        )
    }
}

export default Gallery;
