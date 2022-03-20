import React, { Component, Fragment } from 'react';
import NavbarComponent from '../../../components/navbar';
import FooterComponent from '../../../components/footer';
import axios from 'axios';
import moment from 'moment';

class Activities extends Component {
    state = {
        activity: [],
    }

    componentDidMount() {
        axios.get('/sanctum/csrf-cookie').then(res => {
            axios.get('/api/activities').then(res => {
                if(res.status === 200){
                    const activity = res.data.data;
                    this.setState({ activity })
                }
            }).catch(err => {
                console.log(err.message)
            })
            ;
        });    
    }
    render() {
        return (
            <Fragment>
                <NavbarComponent />
                <main>
                    <section className="relative py-5 mt-10">
                        <div className="container mx-auto px-5 lg:px-20">
                            <h6 className="text-left text-xl font-bold py-5">Kegiatan</h6>
                            {this.state.activity.map((item, index) => {
                            return(
                                <div className="py-5">  
                                <div class="blockbg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                   <div className="flex flex-col lg:flex-row">
                                       <div className="flex">
                                            <div className="bg-gray-700 p-8 w-48 lg:rounded-l-lg rounded-tl-lg text-center">  
                                                <h5 class="mb-2 text-2xl w-14 font-bold tracking-tight text-white">{moment(item.date).format('LL')}</h5>
                                                {/* <h5 class="mb-2 text-2xl font-bold tracking-tight text-white"><span className="text-5xl">14</span> {item.created_at}</h5> */}
                                            </div>
                                            <div className="p-8 w-72">  
                                                <img src={`http://localhost:8000/${item.image}`} />
                                            </div>
                                       </div>
                                       <div className="p-8">
                                            <span class=" bg-blue-300 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
                                                <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                                                {item.time}
                                            </span>
                                            <div>
                                                <a href="test" target="_blank" rel="noopener" class="mb-2 text-2xl font-bold tracking-tight ">{item.title}</a>
                                                <p class="font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                                            </div>
                                       </div>
                                   </div>
                                </div>
                            </div>
                            )
                            })}
                            
                        </div>
                        </section>
                    </main>
                <FooterComponent />
            </Fragment>
        )
    }
}

export default Activities;
