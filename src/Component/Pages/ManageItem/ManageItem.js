import React from 'react';
import { useNavigate } from 'react-router-dom';
import useInventory from '../../../hooks/useInventory';
import ManageItemCard from '../Card/ManageItemCard';
import './ManageItem.css'


const ManageItem = () => {
    const navigate = useNavigate()

    const [products, setProduct] = useInventory()

    return (
        <div>
            <h2>Manage admin item {products.length}</h2>

            <button onClick={() => navigate('/additem')}>Add new ITem</button>


            <table class="table ">
                <thead>
                    <tr>
                        <th scope="col">Item</th>
                        <th scope="col">img</th>
                        <th scope="col">inventory</th>
                        <th scope="col">suplier</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Delete</th>
                        <th scope="col">update</th>
                    </tr>
                </thead>
                <tbody>

                    <>
                        {
                            products.map((product, index) => <ManageItemCard
                                index={index}
                                product={product}
                                key={product._id}
                            ></ManageItemCard>)
                        }
                    </>

                </tbody>
            </table>


        </div>
    );
};

export default ManageItem;