import React from "react";
import "./Item.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Item = (props) => {
    // console.log(props.item);
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
                        <h4 className="author-name">{authorname}</h4>
                        <p className="publishdate">{publishdate}</p>
                    </div>
                </div>
                <div>
                    {" "}
                    <p className="read-time">
                        {readtime} min read &nbsp;{" "}
                        <span>
                            <button
                                onClick={() => handleBookMarkBlogs(props.item)}
                            >
                                <FontAwesomeIcon icon={faBookmark} />
                            </button>
                        </span>
                    </p>
                </div>
            </div>
            <h2 className="blog-title">{blogtitle}</h2>
            <p className="hashtag"> #beginner #programming</p>
            <button className="mark-button" onClick={() => handleReadTime(props.item)}>
                Mark as read
            </button>{" "}
            <hr />
        </div>
    );
};

export default Item;
