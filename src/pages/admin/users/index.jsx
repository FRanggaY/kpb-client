import React, { Component, Fragment } from 'react';
import Sidebar from '../../../components/sidebar';
import CardTable from '../../../components/cards/tables';
import ModalUser from '../../../components/modal/users-modal/add-modal';


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
                                <ModalUser/>
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
