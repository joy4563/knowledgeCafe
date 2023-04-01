import React from "react";
import Blogs from "../blogs/Blogs";
import "./Cart.css";
const Cart = (props) => {
    // console.log(props.bookMark);
    const selectedBookMark = props.bookMark;
    // console.log(bookMark);

    return (
        <div>
            <p className="spent-time">Spent Time On Read:</p>
            <div className="bookmark-blogs">
                <p>Bookmarked Blogs:{selectedBookMark.length}</p>{" "}
                <p>bookMark</p>
                <div>
                    {selectedBookMark.map((title) => 
                        <p>{title.blogtitle}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;
