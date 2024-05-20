import React from 'react';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";

import './../assets/styles/Item.css';

const ItemList = ({ items }) => {
    const [searchItem, setsearchItem] = useState('');

    const handleSearchChange = (event) => {
        setsearchItem(event.target.value);
    };

    const filteredItems = items.filter((item) =>
        item.name.toLowerCase().includes(searchItem.toLowerCase()) ||
        item.description.toLowerCase().includes(searchItem.toLowerCase()) ||
        item.tradeFor.toLowerCase().includes(searchItem.toLowerCase()) ||
        item.location.toLowerCase().includes(searchItem.toLowerCase())
    );

    return (
        <div className='page-list'>
            <div className='searchbar'>
                <FaSearch className='search-icon'/>
                <input 
                className="item-search"
                type="search"
                placeholder="Overpowered ray gun..."
                value={searchItem}
                onChange={handleSearchChange}/>
            </div>

            <div className="item-list">
                {filteredItems.map((item) => (
                    <div className="item" key={item.id}>
                        <Link to={`/item/${item.id-1}`} className="item-link">
                            <div className="item-image-container">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="item-info">
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <p><strong>Trade for:</strong> {item.tradeFor}</p>
                                <p><strong>Location:</strong> {item.location}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemList;
