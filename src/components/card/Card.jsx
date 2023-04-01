import React, { useEffect, useState } from "react";
import Item from "../item/Item";
import "./Card.css";

const Card = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("items.json")
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, []);
    console.log(items);

    return (
        <div className="items-container">
            {items.map((item) => (
                <Item
                    key={item.id} //key tare show kore na
                    item={item}
                ></Item>
                
            ))}
            
        </div>
    );
};

export default Card;
