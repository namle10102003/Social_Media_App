import "./posts.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
// import Comments from "../comments/Comments";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/authContext.jsx";

const Post = ({ post }) => {
    const [commentOpen, setCommentOpen] = useState(false);

    //TEMPORARY
    const liked = false;

    return (
        <div className="post">
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={post.profilePic} alt="" />
                        <div className="details">
                            <Link
                                to={`/profile/${post.userId}`}
                                style={{ textDecoration: "none", color: "inherit" }}
                            >
                                <span className="name">{post.name}</span>
                            </Link>
                            <span className="date">1 min ago</span>
                        </div>
                    </div>
                    <MoreHorizIcon />
                </div>
                <div className="content">
                    <p>{post.desc}</p>
                    <img src={post.img} alt="" />
                </div>
                <div className="info">
                    <div className="item">
                        {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
                        12 Likes
                    </div>
                    <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
                        <TextsmsOutlinedIcon />
                        12 Comments
                    </div>
                    <div className="item">
                        <ShareOutlinedIcon />
                        Share
                    </div>
                </div>
                {commentOpen && <Comments />}
            </div>
        </div>
    );
};

const Posts = () => {
    const { currentUser } = useContext(AuthContext);

    const postsData = [
        {
            id: 1,
            userId: 1,
            name: currentUser?.name || "Someone",
            profilePic: currentUser?.profilePic || "https://via.placeholder.com/40",
            desc: "This is a sample post",
            img: "https://images.pexels.com/photos/27690887/pexels-photo-27690887.jpeg",
        },
    ];

    return (
        <div className="posts">
            {postsData.map((p) => (
                <Post key={p.id} post={p} />
            ))}
        </div>
    );
};

export default Posts;