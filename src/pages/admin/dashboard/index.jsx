import React, { Component, Fragment } from 'react';
import Sidebar from '../../../components/sidebar';
import CardStats from '../../../components/cards/stats';
import axios from 'axios';

class Dashboard extends Component {
    state = {
        userList: [],
    }

  componentDidMount() {
    axios.get('/sanctum/csrf-cookie').then(res => {
        axios.get('/api/users/detail/10').then(res => {
            if(res.status === 200){
                const userList = res.data.data;
                this.setState({ userList })
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
                <main>
                    <Sidebar />
                    <div className="relative md:ml-64 bg-gray-100 md:pt-12 pb-32 pt-12">
                        <div>
                            <div className="px-4 md:px-10 mx-auto w-full">
                            <h6 className="text-blueGray-700 text-xl font-bold py-5">Dashboard</h6>
                                <div>
                                    {/* Card stats */}
                                    <div className="flex flex-wrap">
                                    <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                                        <CardStats
                                        statSubtitle="All Account"
                                        statTitle={this.state.userList.total}
                                        statDescripiron=""
                                        statIconName="far fa-chart-bar"
                                        statIconColor="bg-red-500"
                                        />
                                    </div>
                                    {/* <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                                        <CardStats
                                        statSubtitle="Verified"
                                        statTitle="155"
                                        statDescripiron="Since last week"
                                        statIconName="fas fa-chart-pie"
                                        statIconColor="bg-orange-500"
                                        />
                                    </div>
                                    <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                                        <CardStats
                                        statSubtitle="Joined"
                                        statTitle="133"
                                        statDescripiron="Since yesterday"
                                        statIconName="fas fa-users"
                                        statIconColor="bg-pink-500"
                                        />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                </main>
            </Fragment>
        )
    }
}

export default Dashboard;
