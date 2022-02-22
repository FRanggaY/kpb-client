import React, { Component, Fragment } from 'react';
import NavbarComponent from '../../components/navbar';
import FooterComponent from '../../components/footer';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <NavbarComponent />
                    <main>
                        <div className="bg-blue-400 pt-10">
                            <div className="my-5 flex md:flex-row flex-col-reverse items-center justify-center">
                                <div class="p-6 max-w-sm bg-white md:rounded-l-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                    <div>
                                        <h5 class="text-justify mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Membantu mengatur dan menjaga informasi <span class="text-blue-500">Pengawas Sekolah</span> </h5>
                                    </div>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">KPB menyediakan pengaturan data - data yang bisa di sort, filter, dicari dengan mudah.</p>
                                    <a href="/login" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Join Us
                                        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                                <div>
                                    <img className="md:rounded-r-lg" alt="test" src="https://placeimg.com/640/480/tech" />
                                </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,0L30,32C60,64,120,128,180,133.3C240,139,300,85,360,96C420,107,480,181,540,213.3C600,245,660,235,720,197.3C780,160,840,96,900,85.3C960,75,1020,117,1080,117.3C1140,117,1200,75,1260,53.3C1320,32,1380,32,1410,32L1440,32L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
                        </div>
                        <div className="pb-10">
                            <h5 class="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mengapa KPB? </h5>
                            <div className="mt-5 flex flex-wrap justify-center gap-5">
                                
                                <div class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <img class="mt-5 md:mt-0 object-cover w-24 h-24 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://placeimg.com/640/480/tech" alt=""/>
                                    <div class="flex flex-col justify-between p-4 leading-normal">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sesuai kebutuhan</h5>
                                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Berdasarkan pengalaman nyata.</p>
                                    </div>
                                </div>
                                <div class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <img class="mt-5 md:mt-0 object-cover w-24 h-24 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://placeimg.com/640/480/tech" alt=""/>
                                    <div class="flex flex-col justify-between p-4 leading-normal">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mudah</h5>
                                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Mudah diakses.</p>
                                    </div>
                                </div>
                                <div class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <img class="mt-5 md:mt-0 object-cover w-24 h-24 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://placeimg.com/640/480/tech" alt=""/>
                                    <div class="flex flex-col justify-between p-4 leading-normal">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Siap pakai</h5>
                                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Fitur - fitur siap pakai.</p>
                                    </div>
                                </div>
                                <div class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <img class="mt-5 md:mt-0 object-cover w-24 h-24 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://placeimg.com/640/480/tech" alt=""/>
                                    <div class="flex flex-col justify-between p-4 leading-normal">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Simpel</h5>
                                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Tampilan yang simpel.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="bg-blue-400 py-5">
                            <div className="mx-20 flex md:flex-row flex-col items-center justify-between gap-5">
                                <div>
                                    <p class="text-xl dark:text-white">Solid foundation for any project</p>
                                    <p class="text-lg text-white">lorem Ipsum is simply dummy text</p>
                                </div>
                                <div>
                                    <div className="flex gap-20">
                                        <div>
                                            <p class="text-4xl dark:text-white">500</p>
                                            <p class="text-lg text-white">Joined</p>
                                        </div>
                                        <div>
                                            <p class="text-4xl dark:text-white">500</p>
                                            <p class="text-lg text-white">Active</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-20">
                                        <div>
                                            <p class="text-4xl dark:text-white">500</p>
                                            <p class="text-lg text-white">Total</p>
                                        </div>
                                        <div>
                                            <p class="text-4xl dark:text-white">500</p>
                                            <p class="text-lg text-white">Viewed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                <FooterComponent />
            </Fragment>
        )
    }
}

export default Home;
