import { useParams } from 'react-router-dom';
import useItemDetails from '../../../hooks/useItemDetail';

const Deliverd = () => {

    const { id } = useParams()

    const [item] = useItemDetails(id)

    return (
        <div>
            <h2>This is update section{item._id} name: {item.name}</h2>
        </div>
    );
};

export default Deliverd;