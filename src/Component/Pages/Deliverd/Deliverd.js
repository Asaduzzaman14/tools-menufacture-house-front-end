import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';

const Deliverd = () => {

    const { id } = useParams()
    console.log(id);

    const [items, setItems] = useProducts()

    const clickItem = items.find(item => item._id === id)

    console.log(clickItem);

    return (
        <div>

            <h2>This is update section{id}</h2>
        </div>
    );
};

export default Deliverd;