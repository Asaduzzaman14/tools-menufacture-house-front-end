import { useEffect, useState } from "react";

const useProducts = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {

        fetch('fake.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return [product, setProduct]

}

export default useProducts

