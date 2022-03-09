import React, { Component, Fragment } from 'react';
import Sidebar from '../../../components/sidebar';
import CardGallery from '../../../components/cards/gallery';
import Modal from '../../../components/modal';

class GalleryAdmin extends Component {
    render() {
        return (
            <Fragment>
                <main>
                    <Sidebar />
                    <div className="relative md:ml-64 bg-gray-100 md:pt-12 pb-32 pt-12">
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-12/12 px-4">
                                <div className="text-center flex justify-between px-5 py-3whitespace-nowrap">
                                    <h6 className="text-blueGray-700 text-xl font-bold">Gallery</h6>
                                    <Modal/>
                                </div>
                                <CardGallery/>
                            </div>
                        </div>
                    </div>
                    
                </main>
            </Fragment>
        )
    }
}

export default GalleryAdmin;