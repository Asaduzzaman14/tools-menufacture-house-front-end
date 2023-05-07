import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Card from './Card';

const Parts = () => {


    // const [tools, setTools] = useState([])


    // const fetchDatata = () => {
    //     fetch("https://manufacturer-house-server-ac2k.vercel.app/parts", {
    //         method: 'GET',
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => setTools(data))

    // }

    // useEffect(() => {
    //     fetchDatata()
    // }, [])

    const { data: tools, isLoading, refetch } = useQuery('parts', () => fetch('https://manufacturer-house-server-ac2k.vercel.app/parts', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='bg-primary p-5'>
            <h2 className='mt-10 mb-5 text-3xl p-5 text-white underline underline-offset-8 font-semibold'> Our Tools</h2>

            <div className='grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-5'>
                {
                    tools?.map(tool => <Card
                        tool={tool}
                        key={tool._id}
                    ></Card>)
                }
            </div>

        </div>
    );
};

export default Parts;