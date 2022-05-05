import { useParams } from 'react-router-dom';
import useItemDetails from '../../../hooks/useItemDetail';

const Deliverd = () => {

    const { id } = useParams()

    const [item] = useItemDetails(id)
    console.log(item);
    const { name, img, desc } = item

    return (
        <div>
            <h2>This is update section    name: {item.name}</h2>

            <div>
                <div><img src={img} alt="" /></div>
                <div>
                    <h4>Details</h4>
                    <h6>supplier  name:{name}</h6>
                    <p>Desc : {desc}</p>
                </div>
            </div>
        </div>
    );
};

export default Deliverd;