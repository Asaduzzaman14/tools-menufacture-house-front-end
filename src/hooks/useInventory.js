import { useEffect, useState } from "react";

const useInventory = () => {
    const [inventorys, setInventorys] = useState([])
    useEffect(() => {
        fetch('https://warehouse-management-server-gray.vercel.app/item')
            .then(res => res.json())
            .then(data => {
                setInventorys(data)
            })

    }, [])

    return [inventorys, setInventorys]
}
export default useInventory

