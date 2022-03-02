import React, { Component, Fragment } from 'react';
import NavbarComponent from '../../../components/navbar';
import FooterComponent from '../../../components/footer';

class Activities extends Component {
    render() {
        return (
            <Fragment>
                <NavbarComponent />
                <main>
                    <section className="relative py-5 mt-10">
                        <div className="container mx-auto px-5 lg:px-20">
                            <h6 className="text-left text-xl font-bold py-5">Kegiatan</h6>
                            <div className="py-5">
                                
                                <div class="blockbg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                   <div className="flex flex-col lg:flex-row">
                                       <div className="flex">
                                            <div className="bg-black p-8 w-36 lg:rounded-l-lg rounded-tl-lg text-center">  
                                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white"><span className="text-5xl">14</span> Feb 2022</h5>
                                            </div>
                                            <div className="p-8 w-72">  
                                                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" />
                                            </div>
                                       </div>
                                       <div className="p-8">
                                            <span class=" bg-yellow-300 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
                                                <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                                                10.00 am
                                            </span>
                                            <div>
                                                <a href="test" class="mb-2 text-2xl font-bold tracking-tight ">Ini adalah contoh judul untuk kegiatan</a>
                                                <p class="font-normal text-gray-700 dark:text-gray-400">ini adalah contoh deskripsi tetapi ini hanyalah sementara disaat tidak ada disiapapun dan ini hanya kalimat tidak penting.</p>
                                            </div>
                                       </div>
                                   </div>
                                </div>

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

export default Activities;
