import React from 'react';
import { useNavigate } from 'react-router-dom';
import useInventory from '../../../hooks/useInventory';
import ManageItemCard from '../Card/ManageItemCard';
import Loading from '../Loading/Loading';
import './ManageItem.css'


const ManageItem = () => {
    const navigate = useNavigate()
    const [products, setProduct] = useInventory()


    return (
        <div className='container-fluid'>
            <h2 className='text-white py-5'>MANAGE ADMIN ITEM {products.length}</h2>

            <button className='add-btn' onClick={() => navigate('/additem')}>Add new ITem</button>
            {
                products.length === 0 ? <Loading></Loading>
                    :
                    <div className='table-responsive text-white border rounded'>
                        <table className="table text-white">
                            <thead className=''>
                                <tr className=''>
                                    <th scope="col">Item</th>
                                    <th scope="col">img</th>
                                    <th scope="col">inventory</th>
                                    <th scope="col">suplier</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">ACTIONS</th>
                                    {/* <th scope="col">Delete</th> */}
                                </tr>
                            </thead>

                            <tbody className='items-center '>
                                {
                                    products.map((product, index) => <ManageItemCard
                                        index={index}
                                        product={product}
                                        key={product._id}
                                    ></ManageItemCard>)
                                }
                            </tbody>
                        </table>
                    </div>
            }
        </div>
    );
};

export default ManageItem;