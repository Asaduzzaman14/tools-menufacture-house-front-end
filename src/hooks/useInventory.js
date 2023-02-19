import { useEffect, useState } from "react";

const useInventory = () => {
    const [inventorys, setInventorys] = useState([])
    useEffect(() => {
        // https://warehouse-management-server-gray.vercel.app/
        fetch('https://warehouse-management-server-gray.vercel.app/item')
            // fetch('fake.json')
            .then(res => res.json())
            .then(data => {
                setInventorys(data)
            })

    }, [inventorys])

    return [inventorys, setInventorys]
}
export default useInventory

