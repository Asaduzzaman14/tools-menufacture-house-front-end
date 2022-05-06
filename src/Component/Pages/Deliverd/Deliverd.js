import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useItemDetails from '../../../hooks/useItemDetail';
import Loading from '../Loading/Loading';

const Deliverd = () => {
    const { id } = useParams()
    const [item] = useItemDetails(id)
    const { name, img, desc, quantity, price } = item

    const [quant, setQuentitys] = useState(0)

    if (!item) {
        return <Loading></Loading>
    }
    console.log(item);

    let counter = Number(quantity)
    console.log(counter);
    console.log(item.quantity, 'ddddddd');


    return (
        <div>
            <h2>This is update section  name: {item.name}</h2>

            <div>
                <div><img src={img} alt="" /></div>
                <div>
                    <h3>Name: {name}</h3>
                    <p>supplier name: {desc}</p>
                    <p>price: ${price}</p>
                    <p>quantity: {quant}</p>

                </div>
                <div>
                    <button onClick={() => { setQuentitys(quant + 1) }}>Delivered</button>
                </div>
            </div>
        </div>
    );
};

export default Deliverd;