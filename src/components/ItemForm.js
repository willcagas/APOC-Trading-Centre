import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './../assets/styles/ItemForm.css';

const ItemForm = ({ addItem }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [tradeFor, setTradeFor] = useState('');
    const [image, setImage] = useState('');
    const [location, setLocation] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem({ name, description, tradeFor, image, location });
        navigate('/');
    };

    return (
        <div className="page-form-div">
            <div className="page-form">
                <form onSubmit={handleSubmit}>
                    <h2>Post Listing</h2>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Description:</label>
                        <input
                            type="text"
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="tradeFor">Trade For:</label>
                        <input
                            type="text"
                            id="tradeFor"
                            value={tradeFor}
                            onChange={(e) => setTradeFor(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="image">Image URL:</label>
                        <input
                            type="text"
                            id="image"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="location">Location:</label>
                        <input
                            type="text"
                            id="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Add Item</button>
                </form>
            </div>
        </div>
    );
};

export default ItemForm;
