import React from "react";
import Blogs from "../blogs/Blogs";
import "./Cart.css";
const Cart = (props) => {
    // console.log(props);
    const { bookMark } = props;
    // console.log(bookMark);

    return (
        <div>
            <p className="spent-time">Spent Time On Read:</p>
            <div className="bookmark-blogs">
                <p>Bookmarked Blogs:{bookMark.length}</p> <p>bookMark</p>
                <div>
                    {bookMark.map((title) => {
                        // <p>{title}</p>;
                        console.log(title);
                    })}
                </div>
            </div>
        </div>
    );
};

export default Cart;
