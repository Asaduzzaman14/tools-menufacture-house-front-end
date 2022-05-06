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

            <div className='manage-item-container'>
                {
                    products.map(product => <ManageItemCard
                        product={product}
                        key={product._id}
                    ></ManageItemCard>)
                }
            </div>

        </div>
    );
};

export default ManageItem;