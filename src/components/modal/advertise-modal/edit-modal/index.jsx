import React, { Component, Fragment } from 'react';

class ModalEditAdvertise extends Component {
    render() {
        return (
            <Fragment>
                <main>
                <div class="block space-y-4 md:flex md:space-y-0 md:space-x-4">
                    <button class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" type="button" data-modal-toggle="edit-modal">Ubah
                    </button>
                </div>
                <div class="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center md:inset-0 h-modal sm:h-full" id="edit-modal">
                    <div class="relative px-4 w-full max-w-4xl h-full md:h-auto">
                        {/* <!-- Modal content --> */}
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            {/* <!-- Modal header --> */}
                            <div class="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
                                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="edit-modal">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                                </button>
                            </div>
                            {/* <!-- Modal body --> */}
                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                <form className="pt-10 px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" action="#">
                                    <h3 className="text-xl text-center font-medium text-gray-900 dark:text-white">Ubah Iklan</h3>

                                    
                                    <div className="relative z-0 mb-6 w-full group">
                                        <label className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-gray-300" for="user_avatar">Upload file</label>
                                        <input className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file"/>
                                    </div>
                                    <div class="relative z-0 mb-6 w-full group">
                                        <label for="Name" className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300">title</label>
                                            <input type="Text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="title" required />
                                    </div>
                                <div class="relative z-0 mb-6 w-full group">
                                    <label for="Name" className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300">Link</label>
                                        <input type="text" name="link" id="link" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Link" required />
                                </div>
                                </form>
                            </div>
                            {/* <!-- Modal footer --> */}
                            <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                                <button data-modal-toggle="large-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ubah</button>
                                {/* <button data-modal-toggle="large-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">Batal</button> */}
                            </div>
                        </div>
                    </div>
                </div>
                </main>
            </Fragment>
        )
    }
}

export default ModalEditAdvertise;
