import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Card.css'


const Card = ({ item }) => {
    const navigate = useNavigate()

    return (
        <div>
            <div className='card-body'>
                <img src={item.pictures} alt="" />
                <h3>Name:{item.name}</h3>
                <p>supplier name:{item.desc}</p>
                <p>price:{item.desc}</p>
                <p>quantity:1</p>

                {/* <Link to={`/deliverd/${item.id}`}><button>Update</button> </Link> */}

                <button onClick={() => navigate(`/deliverd/${item._id}`)} className='update-btn'>Update</button>
            </div>
        </div>
    );
};

export default Card;