import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init';
import UserInventoryItem from '../UserInventoryItem/UserInventoryItem';
import { useNavigate } from 'react-router-dom';


const MyItem = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth)
    const [items, setItems] = useState([])


    useEffect(() => {
        const getItem = async () => {
            const email = user.email
            console.log(email);
            const url = `https://warehouse-management-server-gray.vercel.app/myitem?email=${email}`
            const { data } = await axios.get(url)
            setItems(data);

        }
        getItem()
    }, [user])

    const handelDelete = (id) => {
        const proceed = window.confirm('Are you sure')
        if (proceed) {

            const url = `https://warehouse-management-server-gray.vercel.app/item/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(item => item._id !== id)
                    setItems(remaining)
                })

        }

    }




    return (
        <div>
            <h2>This is my item {items.length}</h2>

            <div>
                <table className="table mt-5">
                    {
                        items.length === 0 ? <>YOU HAVE NO ITEM             <button className='add-btn' onClick={() => navigate('/additem')}>Please Add new ITem</button>
                        </>
                            : <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">suplier</th>
                                    <th scope="col">quantity</th>
                                    <th scope="col">Update</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                    }


                    <tbody>

                        <>
                            {
                                items.map((item, keys) => <UserInventoryItem
                                    item={item}
                                    keys={keys}
                                    key={item.key}
                                    handelDelete={handelDelete}
                                ></UserInventoryItem>)
                            }
                        </>

                    </tbody>
                </table>
            </div>

        </div >
    );
};

export default MyItem;