import React, { Component, Fragment } from 'react';
import NavbarComponent from '../../../components/navbar';
import FooterComponent from '../../../components/footer';
import { AiOutlineArrowRight } from 'react-icons/ai';

class Profile extends Component {
    render() {
        return (
            <Fragment>
                <NavbarComponent />
                <main>
                        <section className="bg-sky-200 mt-10">
                            <div className="container mx-auto px-4 pb-8">
                                <div className="flex flex-wrap-reverse items-center">
                                <div className="w-full md:w-6/12 px-4 ml-auto">
                                    <div className="mb-12 mt-12">    
                                        <div className="block py-10 pr-12 pl-10 w-full bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">VISI</h5>
                                            <p className="font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eveniet dolores, animi maxime numquam expedita incidunt fuga. Maxime ab similique aliquid tempora obcaecati illo unde sapiente, est, tempore placeat sequi?</p>
                                        </div>
                                    </div>
                                    <div className="block py-10 pr-12 pl-10 w-full bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">MISI</h5>
                                        <p className="font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ducimus similique quas optio suscipit qui nemo incidunt corrupti, sapiente eius veritatis numquam consectetur nam iusto voluptatem, dolores rerum ad deleniti.</p>
                                    </div>
                                </div>

                                <div className="w-full md:w-4/12 px-4 mr-auto ml-auto pt-20">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                                    <img
                                    alt="..."
                                    className="max-w-full rounded-lg shadow-lg"
                                    src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                                    />
                                    
                                    </div>
                                </div>
                                </div>
                            </div>
                        </section>
                    </main>
                <FooterComponent />
            </Fragment>
        )
    }
}

export default Profile;
