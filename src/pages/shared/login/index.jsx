import React, { Component, Fragment } from 'react';
import ThumbLogin from '../../../assets/thumb/thumb-login.png';

class Login extends Component {
    render() {
        return (
            <Fragment>
                <main>
                    <div className="max-w-md mx-auto my-12 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                        <div className="md:flex md:flex-row">
                            <div className="bg-blue-700 hidden md:flex md:flex-col md:justify-center md:items-center bg-blue h-100">
                                <img src={ThumbLogin} alt="" />
                                <div className="text-lg text-white">Don’t Forget</div>
                                <div className="text-white">Beautiful sunsets need cloudy skies</div>
                            </div>
                            <div className="px-8 py-5 md:w-[44rem]">
                                <div className="md:text-left text-center uppercase tracking-wide text-sm text-indigo-500 font-semibold text-4xl">KPB</div>
                                <div className="md:text-left text-center pt-5 tracking-wide text-sm text-black font-bold text-2xl">Sign In</div>
                                <p className="md:text-left text-center mt-2 text-slate-500">Enter your credentials to access your account</p>

                                                                
                                <div className="pt-5">
                                    <div className="mb-6">
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                                        <input type="email" id="email" className="w-full shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@email.com" required=""/>
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                                        <input type="password" id="password" className="w-full shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="password" required=""/>
                                    </div>
                                    <div className="flex justify-center mb-6">
                                        <div className="text-sm">
                                            <label htmlFor="terms" className="font-medium text-gray-900 dark:text-gray-300">Don’t have an account yet?  <a href="/register" className="text-blue-600 hover:underline dark:text-blue-500">Sign Up</a></label>
                                        </div>
                                    </div>
                                    <button type="submit" className="w-full w-text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white">Login</button>
                                </div>


                            </div>
                        </div>
                    </div>
                </main>
            </Fragment>
        )
    }
}

export default Login;
