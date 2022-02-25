import React from "react";
import { Link } from "react-router-dom";

// components

import Navbar from "components/Navbars/AuthNavbar.jsx";
import Footer from "components/Footers/Footer.jsx";

export default function Landing() {
  return (
    <>
      <Navbar transparent />
      <main>
      <section className="relative py-40 mt-20">
          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-3 md:w-4/12 ml-auto mr-auto px-20">
              <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <h3 className="text-5xl font-semibold">KPB</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, a doloribus facilis repellendus fugit sunt asperiores adipisci modi aliquid cupiditate nostrum cumque dignissimos nam expedita ut laborum ipsum accusamus nulla.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 bg-blueGray-200 mt-24">
          <div className="container mx-auto px-4 ">
            {/*  */}

            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="mb-12 mt-12">    
                  <a href="#" class="block py-10 pr-12 pl-10 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">VISI</h5>
                  <p class="font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eveniet dolores, animi maxime numquam expedita incidunt fuga. Maxime ab similique aliquid tempora obcaecati illo unde sapiente, est, tempore placeat sequi?</p>
                  </a>
                </div>
                  <a href="#" class="block py-10 pr-12 pl-10 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">MISI</h5>
                  <p class="font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ducimus similique quas optio suscipit qui nemo incidunt corrupti, sapiente eius veritatis numquam consectetur nam iusto voluptatem, dolores rerum ad deleniti.</p>
                  </a>
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

        <section className="relative py-20 mb-12 pt-12 ">
          <div className="container mx-auto px-4 bg-blueGrey-200">
            <div className="items-center flex flex-wrap">
              <div className="w-3 md:w-4/12 ml-auto mr-auto px-20">
              <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <h3 className="text-5xl font-semibold">Bergabung dengan jaringan terbesar</h3>
                  <p className="mt-10 text-lg leading-relaxed text-blueGray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, a doloribus facilis repellendus fugit sunt asperiores adipisci modi
                  </p>
                  <ul class="flex flex-wrap mt-4">
                  <li class="mr-2">
                    <button className="bg-sky-500 text-blue-700 active:bg-blueGray-50 text-sm font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button">
                  <a href="#" class="inline-block py-3 px-4 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white">Kegiatan</a>
                  </button>
                  </li>
                  <li class="mr-2">
                  <button className="bg-sky-500 text-blue-700 active:bg-blueGray-50 text-sm font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button">
                  <a href="#" class="inline-block py-3 px-4 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white">Galeri</a>
                  </button>
                  </li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section className=" relative block bg-blueGray-600">
          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Kontak kami
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap mt-32 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Mail</title><rect x="48" y="96" width="416" height="320" rx="40" ry="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 160l144 112 144-112"/></svg>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Email
                </h6>
                <p className="mt-2 mb-4 text-blueGray-400">
                  kpb@email.com
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Call</title><path d="M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0083 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0013.8-25.8C465 391.17 468 391.17 451 374z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/></svg>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Phone
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  +1234567890
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Location</title><path d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><circle cx="256" cy="192" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
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
      <Footer />
    </>
  );
}
