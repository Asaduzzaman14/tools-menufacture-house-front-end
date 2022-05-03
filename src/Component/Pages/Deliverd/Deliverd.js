import React from 'react';
import { useParams } from 'react-router-dom';

const Deliverd = () => {

    const { id } = useParams()
    console.log(id);
    return (
        <div>

            <h2>This is update section</h2>
        </div>
    );
};

export default Deliverd;