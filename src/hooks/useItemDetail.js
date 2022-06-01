import { useEffect, useState } from "react"


const useItemDetails = (itemId, id, handelFrom) => {

    const [item, setItems] = useState([])

    useEffect(() => {
        const url = `http://localhost:5000/item/${itemId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))

    }, [itemId, id, handelFrom])
    return [item, setItems]
}

export default useItemDetails