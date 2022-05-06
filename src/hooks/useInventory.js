import { useEffect, useState } from "react";
import Loading from "../Component/Pages/Loading/Loading";

const useInventory = () => {

    const [inventorys, setInventorys] = useState([])




    useEffect(() => {

        // fetch('http://localhost:5000/item')
        fetch('fake.json')
            .then(res => res.json())
            .then(data => {
                setInventorys(data)
            })
    }, [])
    return [inventorys, setInventorys]

}

export default useInventory

