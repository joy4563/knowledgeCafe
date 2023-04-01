import React from "react";
import Blogs from "../blogs/Blogs";
import "./Cart.css";
const Cart = (props) => {
    // console.log(props);
    const markedBlog=props.markedBlog
    const selectedBookMark = props.bookMark;
    // console.log(bookMark);

    // calculate time total
    let times = 0;
    for (const blog of markedBlog) {
        times = times + blog.readtime;
    }
    return (
        <div className="">
            <p className="spent-time">Spent Time On Read:{times}</p>
            <div className="bookmark-blogs">
                <p>Bookmarked Blogs:{selectedBookMark.length}</p>{" "}
                <div>
                    {selectedBookMark.map((title) => (
                        <p>{title.blogtitle}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cart;
