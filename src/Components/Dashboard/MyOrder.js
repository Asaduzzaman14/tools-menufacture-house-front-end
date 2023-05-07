import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import DeleteOrderModal from './DeleteOrderModal';
import Order from './Order';

const MyOrder = () => {
    const [orderDeleteId, setOrderDeleteId] = useState(null)
    const [user] = useAuthState(auth)

    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`https://manufacturer-house-server-ac2k.vercel.app/orders?email=${user?.email}`, {
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
            <h2 className="text-2xl text-red-500">This is my Order {orders?.length}</h2>

            <div>
                <h2 className="text-2xl">All tools:{orders?.length}</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>no.</th>
                                <th>Name</th>
                                <th>email</th>
                                <th>quantity</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders?.map((order, index) => <Order
                                    key={order._id}
                                    order={order}
                                    index={index}
                                    refetch={refetch}
                                    setOrderDeleteId={setOrderDeleteId}
                                ></Order>
                                )
                            }
                        </tbody>
                    </table>



                </div>
            </div>

            {orderDeleteId && <DeleteOrderModal
                orderDeleteId={orderDeleteId}
                setOrderDeleteId={setOrderDeleteId}

            ></DeleteOrderModal>}
        </div>
    );
};

export default MyOrder;