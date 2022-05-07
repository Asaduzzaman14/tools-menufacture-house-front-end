import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init';
import UserInventoryItem from '../UserInventoryItem/UserInventoryItem';


const MyItem = () => {
    const [user] = useAuthState(auth)
    const [items, setItems] = useState([])


    useEffect(() => {

        const getItem = async () => {
            const email = user.email
            console.log(email);
            const url = `http://localhost:5000/myitem?email=${email}`
            const { data } = await axios.get(url)
            setItems(data);

        }
        getItem()


    }, [user])


    return (
        <div>
            <h2>This is my item {items.length}</h2>

            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>

                        <div >
                            {
                                items.map((item, keys) => <UserInventoryItem
                                    item={item}
                                    keys={keys}
                                    key={item.key}
                                ></UserInventoryItem>)
                            }
                        </div>

                    </tbody>
                </table>
            </div>

        </div >
    );
};

export default MyItem;