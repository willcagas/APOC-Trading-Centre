import React from 'react';

import { Link } from 'react-router-dom';

import './../assets/styles/Item.css';

const Item = ({ item, index }) => {
    return (
        <div className="item">
            <Link to={`/item/${index}`} className="item-link">
                <div className="item-image-container">
                    <img src={item.image} alt={item.name} />
                </div>
                <div className="item-info">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                </div>
            </Link>
        </div>
    );
};

export default Item;
