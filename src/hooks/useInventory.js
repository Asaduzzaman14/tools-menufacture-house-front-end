import { useEffect, useState } from "react";

const useInventory = () => {
    const [inventorys, setInventorys] = useState([])
    useEffect(() => {
        // http://localhost:5000/
        fetch('http://localhost:5000/item')
            // fetch('fake.json')
            .then(res => res.json())
            .then(data => {
                setInventorys(data)
            })

    }, [inventorys])

    return [inventorys, setInventorys]
}
export default useInventory

