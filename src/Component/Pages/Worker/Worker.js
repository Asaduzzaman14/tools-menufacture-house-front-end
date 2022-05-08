import React, { useEffect, useState } from 'react';
import SingleWorker from './SingleWorker';
import './Worker.css'


const Worker = () => {

    const [workers, setworkers] = useState([])
    useEffect(() => {
        fetch('worker.json')
            .then(res => res.json())
            .then(data => setworkers(data))
    }, [])


    return (
        <div>
            <h2 className='mt-5 mb-3 '>Meet our Worker</h2>

            <div className='worker-container'>
                {
                    workers.map(worker => <SingleWorker
                        worker={worker}
                    ></SingleWorker>)
                }
            </div>
        </div>
    );
};

export default Worker;