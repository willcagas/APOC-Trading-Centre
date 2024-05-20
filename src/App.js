import React from 'react';

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import ItemDetail from './components/ItemDetail';

import './App.css';

const App = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('/items.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setItems(data))
            .catch(error => console.error('Error fetching items:', error));
    }, []);

    const addItem = (item) => {
        setItems([...items, item]);
    };

    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<ItemList items={items} />} />
                    <Route path="/post-listing" element={<ItemForm addItem={addItem} />} />
                    <Route path="/item/:id" element={<ItemDetail items={items} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
