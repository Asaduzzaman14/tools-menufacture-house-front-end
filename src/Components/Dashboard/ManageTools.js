import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageTool from './ManageTool';
import RemoveTools from './RemoveTools';

const ManageTools = () => {


    const [removeTools, setRemoveTools] = useState(null)
    console.log(removeTools);

    const { data: tools, isLoading, refetch } = useQuery('manageTools', () => fetch('https://manufacturer-house-server-ac2k.vercel.app/parts', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }




    return (
        <div>
            <h2 className="text-2xl text-white bg-red-900 py-5">Manage All Tools</h2>

            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>no.</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>min order quantity</th>
                                <th>abailavle quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tools?.map((tool, index) => <ManageTool
                                    key={tool._id}
                                    tool={tool}
                                    index={index}
                                    setRemoveTools={setRemoveTools}
                                ></ManageTool>
                                )
                            }
                        </tbody>
                    </table>
                </div>

                {removeTools && <RemoveTools
                    refetch={refetch}
                    removeTools={removeTools}
                    setRemoveTools={setRemoveTools}
                ></RemoveTools>}
            </div>



        </div>
    );
};

export default ManageTools;