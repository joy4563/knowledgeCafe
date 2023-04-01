import React from "react";
import "./Item.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faCoffee } from "@fortawesome/free-solid-svg-icons";

const Item = (props) => {
    // console.log(props.item.blogtitle);
    const { authorimg, authorname, publishdate, readtime, blogtitle, img } =
        props.item;
    const handleReadTime = props.handleReadTime;
    const handleBookMarkBlogs = props.handleBookMarkBlogs;

    return (
        <div className="item-container">
            <img src={img} alt="" />
            <div className="person-details">
                <div className="profile-info">
                    <img src={authorimg} alt="" />
                    <div>
                        <h4>{authorname}</h4>
                        <p>{publishdate}</p>
                    </div>
                </div>
                <div>
                    {" "}
                    <button
                        onClick={() =>
                            handleBookMarkBlogs(props.item.blogtitle)
                        }
                    >
                        {readtime} min read &nbsp;
                        <FontAwesomeIcon icon={faBookmark} />
                    </button>
                </div>
            </div>
            <h2>{blogtitle}</h2>
            <button onClick={() => handleReadTime(props.item)}>
                Mark as read
            </button>{" "}
            <hr />
        </div>
    );
};

export default Item;
