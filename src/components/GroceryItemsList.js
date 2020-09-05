import React from 'react';
import GroceryItem from './GroceryItem';

const ItemList = ({ items, removeItem }) => {
    return (
        <div className="grid-container ">
            <ol>
                {items.map((item) => (
                    <li>
                        <GroceryItem key={item} item={item} removeItem={removeItem} />
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default ItemList;