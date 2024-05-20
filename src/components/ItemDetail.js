import React from 'react';

import { useState } from 'react';
import { useParams, Link} from 'react-router-dom';
import { IoIosSend } from "react-icons/io";

import map from './../assets/images/map.png';

import './../assets/styles/ItemDetail.css';

const ItemDetail = ({ items }) => {
    const { id } = useParams();
    const item = items[id];
    const [enteredText, setEnteredText] = useState('');

    if (!item) {
        return <div>Listing does not exist</div>;
    }

    const handleInputChange = (event) => {
        setEnteredText(event.target.value);
    };

    const handleButtonClick = () => {
        setEnteredText('');
    };

    return (
        <div className="page">
            <div className="item-detail">
                <img src={item.image} alt={item.name} />
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p><strong>Trade for:</strong> {item.tradeFor}</p>
                <p><strong>Location:</strong> {item.location}</p>
                
                <p className="counter-label"><strong>Make a Counter Offer: 
                    <input className="counter-height" value={enteredText} onChange={handleInputChange}/></strong> 
                    <button onClick={handleButtonClick}
                        ><IoIosSend/>
                    </button> 
                </p>

                <img src={map} alt=''/>

                <Link to="/">Back to Listings</Link>
            </div>
        </div> 
    );
};

export default ItemDetail;
