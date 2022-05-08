import { useEffect, useState } from "react";

const useInventory = () => {
    const [inventorys, setInventorys] = useState([])
    useEffect(() => {
        // https://arcane-cove-19592.herokuapp.com/
        fetch('https://arcane-cove-19592.herokuapp.com/item')
            // fetch('fake.json')
            .then(res => res.json())
            .then(data => {
                setInventorys(data)
            })

    }, [inventorys])

    return [inventorys, setInventorys]
}
export default useInventory

