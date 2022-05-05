import React from 'react';
import useProducts from '../../../hooks/useProducts';
import ManageItemCard from '../Card/ManageItemCard';
import './ManageItem.css'


const ManageItem = () => {

    const [products, setProduct] = useProducts()

    return (
        <div>
            <h2>Manage admin item {products.length}</h2>

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