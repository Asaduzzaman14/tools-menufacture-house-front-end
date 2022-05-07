import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init';


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
        </div>
    );
};

export default MyItem;