import { useEffect, useState } from "react"


const useItemDetails = (itemId, id) => {

    const [item, setItems] = useState([])

    useEffect(() => {
        const url = `https://arcane-cove-19592.herokuapp.com/item/${itemId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))

    }, [itemId, id])
    return [item, setItems]
}

export default useItemDetails