import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageOrder from './ManageOrder';

const ManageOrders = () => {

    const { data: orders, isLoading, refetch } = useQuery('manageOrder', () => fetch('https://manufacturer-house-server-ac2k.vercel.app/manageOrders', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }

    }).then(res => res.json()));
    console.log(orders);

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-2xl text-white font-semibold py-2">Manage All Orders: {orders?.length}</h2>

            <div>
                {/* <h2 className=" text-2xl text-white font-semibold mb-3">All Orders: {orders?.length}</h2> */}
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>no.</th>
                                <th>Name</th>
                                <th>email</th>
                                <th> quantity</th>
                                <th> price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders?.map((order, index) => <ManageOrder
                                    key={order._id}
                                    order={order}
                                    index={index}
                                ></ManageOrder>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>



        </div>
    );
};

export default ManageOrders;