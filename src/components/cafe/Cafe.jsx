import React, { useEffect, useState } from "react";
import Cart from "../cart/Cart";
import Item from "../item/Item";
import "./Cafe.css";

const Cafe = () => {
    const [items, setItems] = useState([]);
    // state for update bookmarked blog
    const [bookMark, setBookMark] = useState([]);
    // mark as read
    

    useEffect(() => {
        fetch("items.json")
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, []);

    // handle Read Time
    const handleReadTime = (readTime) => {
        console.log(readTime);
    };

    // handle Bookmark blogs count

    const handleBookMarkBlogs = (bookMarkBlogs) => {
        const newBookMark = [...bookMark, bookMarkBlogs];
        setBookMark(newBookMark);
        console.log(bookMark);
    };

    return (
        <div className="cafe-container">
            <div className="items-container">
                {items.map((item) => (
                    <Item
                        key={item.id} //key tare show kore na
                        item={item}
                        handleReadTime={handleReadTime}
                        handleBookMarkBlogs={handleBookMarkBlogs}
                    ></Item>
                ))}
            </div>
            <div className="cart-container">
                <Cart
                    
                    bookMark={bookMark}></Cart>
                {
                    
                }
            </div>
        </div>
    );
};

export default Cafe;
