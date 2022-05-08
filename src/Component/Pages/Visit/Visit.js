import React, { useEffect, useState } from 'react';

const Visit = () => {

    const [warehouse, setWarehouse] = useState([])
    useEffect(() => {
        fetch('worker.json')
            .then(res => res.json())
            .then(data => setWarehouse(data))
    }, [])

    const visit = warehouse.slice(0, 6)

    return (
        <div>
            <h2>Visit us</h2>
            room{visit.length}
        </div>
    );
};

export default Visit;


