import React from 'react';
import useProducts from '../../../hooks/useProducts';
import ManageItemCard from '../Card/ManageItemCard';

const ManageItem = () => {

    const [products, setProduct] = useProducts()

    return (
        <div>
            <h2>Manage admin item {products.length}</h2>

            {
                products.map(product => <ManageItemCard
                    product={product}
                    key={product._id}
                ></ManageItemCard>)
            }

        </div>
    );
};

export default ManageItem;