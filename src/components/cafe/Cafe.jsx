import React, { useEffect, useState } from "react";
import Cart from "../cart/Cart";
import Item from "../item/Item";
import "./Cafe.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cafe = () => {
    const [items, setItems] = useState([]);
    // state for update bookmarked blog
    const [bookMark, setBookMark] = useState([]);
    // mark as read
    const [markedBlog, setMarkBlog] = useState([]);

    useEffect(() => {
        fetch("items.json")
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, []);

    // handle Read Time
    const handleReadTime = (readedBlog) => {
        const newMarkedBlog = [...markedBlog, readedBlog];
        setMarkBlog(newMarkedBlog);
    };

    // handle Bookmark blogs count

    const handleBookMarkBlogs = (bookMarkBlogs) => {
        // check the item already exist
        let exist = false;
        for (const item of bookMark) {
            if (item.id === bookMarkBlogs.id) {
                exist = true;
                break;
            }
        }
        if (exist === true) {
            toast.warning("You have already selected that as Bookmark", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000,
            });
        }

        const newBookMark = [...bookMark, bookMarkBlogs];
        setBookMark(newBookMark);
        // console.log(bookMark);
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
                <Cart bookMark={bookMark} markedBlog={markedBlog}></Cart>
                {}
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Cafe;
