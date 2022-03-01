import React, { Component, Fragment } from 'react';
import NavbarComponent from '../../components/navbar';
import FooterComponent from '../../components/footer';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <NavbarComponent />
                <main>
                    <section className="relative py-5 mt-10">
                        <div className="container mx-auto px-5 lg:px-20">
                            <div className="items-center flex flex-col lg:flex-row gap-5">
                                <div>
                                    <img
                                        alt="..."
                                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                                        className="w-80 align-middle rounded-t-lg"
                                    />
                                </div>
                                <div className="w-full ml-auto mr-auto px-4">
                                    <h3 className="text-5xl font-semibold">KPB</h3>
                                    <p className="mt-4 text-lg leading-relaxed text-justify">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, a doloribus facilis repellendus fugit sunt asperiores adipisci modi aliquid cupiditate nostrum cumque dignissimos nam expedita ut laborum ipsum accusamus nulla.
                                    </p>
                                </div>
                            </div>
                        </div>
                        </section>

                        <section className="bg-sky-200 mt-10">
                            <div className="container mx-auto px-4 ">
                                <div className="flex flex-wrap items-center">
                                <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                                    <div className="mb-12 mt-12">    
                                        <div className="block py-10 pr-12 pl-10 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">VISI</h5>
                                            <p className="font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eveniet dolores, animi maxime numquam expedita incidunt fuga. Maxime ab similique aliquid tempora obcaecati illo unde sapiente, est, tempore placeat sequi?</p>
                                        </div>
                                    </div>
                                    <div className="block py-10 pr-12 pl-10 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
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

                        

                        <section className="pt-20 pb-48">
                            <div className="container mx-auto px-4">
                                <div className="flex flex-wrap justify-center text-center mb-24">
                                    <div className="w-full lg:w-6/12 ml-15">
                                        <h2 className="text-4xl font-semibold ">Program Kerja</h2>
                                        <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quia corrupti quidem quae corporis qui itaque, molestias iste unde officia alias laudantium
                                        </p>
                                    </div>
                                    </div>
                                <div className="flex flex-wrap">
                                <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                        <i className="fas fa-award"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">Lorem Ipsum</h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam asperiores perferendis architecto sint. Officia pariatur architecto tempore itaque dicta dolorum est rerum.
                                        </p>
                                    </div>
                                    </div>
                                </div>

                                <div className="w-full md:w-4/12 px-4 text-center">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                                        <i className="fas fa-retweet"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">Lorem Ipsum</h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam asperiores perferendis architecto sint. Officia pariatur architecto tempore itaque dicta dolorum est rerum.
                                        </p>
                                    </div>
                                    </div>
                                </div>

                                <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                                        <i className="fas fa-fingerprint"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">Lorem Ipsum</h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam asperiores perferendis architecto sint. Officia pariatur architecto tempore itaque dicta dolorum est rerum.
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </section>

                        <section className="relative py-20 mb-12 pt-12 bg-sky-200 ">
                            <div className="container mx-auto px-4 ">
                                <div className="items-center flex flex-wrap">
                                    <div className="w-3 md:w-4/12 ml-auto mr-auto px-20 hidden lg:block">
                                        <div id="myTabContent">
                                            <div className="p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                                                <img
                                                    alt="..."
                                                    className="max-w-full rounded-lg shadow-lg"
                                                    src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                                                />
                                                <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Galeri</strong>. </p>
                                            </div>
                                            <div className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                                <img
                                                    alt="..."
                                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                                                    className="w-full align-middle rounded-t-lg"
                                                />
                                                <p className=" text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Kegiatan</strong>. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                                        <div className="md:pr-12">
                                        <h3 className="text-5xl font-semibold">Bergabung dengan jaringan terbesar</h3>
                                        <p className="mt-10 text-lg leading-relaxed text-blueGray-500">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, a doloribus facilis repellendus fugit sunt asperiores adipisci modi
                                        </p>
                                        
                                        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                                            <ul className="flex flex-wrap -mb-px" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                                                <li className="mr-2" role="presentation">
                                                    <button className="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 active" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="true">Galeri</button>
                                                </li>
                                                <li className="mr-2" role="presentation">
                                                    <button className="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 " id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Kegiatan</button>
                                                </li>
                                            </ul>
                                        </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className=" relative block bg-blueGray-600">
                        <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
                            <div className="flex flex-wrap text-center justify-center">
                            <div className="w-full lg:w-6/12 px-4">
                                <h2 className="text-4xl font-semibold text-black">
                                Kontak kami
                                </h2>
                            </div>
                            </div>
                            <div className="flex flex-wrap mt-32 justify-center">
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Mail</title><rect x="48" y="96" width="416" height="320" rx="40" ry="40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M112 160l144 112 144-112"/></svg>
                                </div>
                                <h6 className="text-xl mt-5 font-semibold text-black">
                                Email
                                </h6>
                                <p className="mt-2 mb-4 text-blueGray-400">
                                kpb@email.com
                                </p>
                            </div>
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Call</title><path d="M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0083 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0013.8-25.8C465 391.17 468 391.17 451 374z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/></svg>
                                </div>
                                <h5 className="text-xl mt-5 font-semibold text-black">
                                Phone
                                </h5>
                                <p className="mt-2 mb-4 text-blueGray-400">
                                +1234567890
                                </p>
                            </div>
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Location</title><path d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><circle cx="256" cy="192" r="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                                </div>
                                <h5 className="text-xl mt-5 font-semibold text-black">
                                Location
                                </h5>
                                <p className="mt-2 mb-4 text-blueGray-400">
                                Indonesia
                                </p>
                            </div>
                            </div>
                        </div>
                        </section>
                    </main>
                    {/* <main>
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
                    </main> */}
                <FooterComponent />
            </Fragment>
        )
    }
}

export default Home;
