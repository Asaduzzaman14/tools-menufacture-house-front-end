import React from 'react';
import notFoundImg from '../../../image/404.jpg'

const NotFound = () => {
    return (
        <div>
            <h2>This page is Not Found</h2>
            <div>
                <img src={notFoundImg} alt="" />
            </div>
        </div>
    );
};

export default NotFound;