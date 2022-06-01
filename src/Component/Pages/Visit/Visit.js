import React, { useEffect, useState } from 'react';
import VisitOne from './VisitOne';

import './Visit.css'

const Visit = () => {

    const [warehouse, setWarehouse] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/extra')
            .then(res => res.json())
            .then(data => setWarehouse(data))
    }, [])

    const visit = warehouse.slice(6, 12)

    return (
        <div className='visitOne-container-main'>
            <h2 className='visting-title' >Visit Our WearHouse </h2>

            <div className='visitOne-container'>
                {
                    visit.map(visitOne => <VisitOne
                        visitOne={visitOne}
                        key={visitOne._id}
                    ></VisitOne>)
                }
            </div>
        </div>
    );
};

export default Visit;


