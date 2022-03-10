import React, { Component, Fragment } from 'react';
import Sidebar from '../../../components/sidebar';
import CardTable from '../../../components/cards/tables';
import AddUsersModal from '../../../components/modal/users/add';


class Users extends Component {
    render() {
        return (
            <Fragment>
                <main>
                    <Sidebar />
                    <div className="relative md:ml-64 bg-gray-100 md:pt-12 pb-32 pt-12">
                        <div className="flex flex-wrap mt-4">
                            <div className="w-full mb-12 px-4 justify-between">
                            <div className="text-center flex justify-between px-5 py-3whitespace-nowrap">
                                <h6 className="text-blueGray-700 text-xl font-bold">Users</h6>
                                <div className="flex gap-2">
                                    <a href="/admin/users" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
                                        Refresh
                                    </a>
                                    <AddUsersModal/>
                                </div>
                            </div>
                                <CardTable />
                            </div>
                        </div>
                    </div>
                    
                </main>
            </Fragment>
        )
    }
}

export default Users;
