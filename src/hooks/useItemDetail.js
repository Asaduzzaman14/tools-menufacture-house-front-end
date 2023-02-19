import { useEffect, useState } from "react"


const useItemDetails = (itemId, id, handelFrom) => {

    const [item, setItems] = useState([])

    useEffect(() => {
        const url = `https://warehouse-management-server-gray.vercel.app/item/${itemId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))

    }, [itemId, id, handelFrom])
    return [item, setItems]
}

export default useItemDetails