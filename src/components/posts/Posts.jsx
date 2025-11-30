import "./posts.scss";
import Post from "../post/Post";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext.jsx";

const Posts = () => {
    const { currentUser } = useContext(AuthContext);

    const postsData = [
        {
            id: 1,
            userId: 1,
            name: currentUser?.name || "Laurent Garcia",
            profilePic: currentUser?.profilePic || "https://images.pexels.com/photos/27690887/pexels-photo-27690887.jpeg",
            desc: "This is a sample post",
            img: "https://images.pexels.com/photos/27690887/pexels-photo-27690887.jpeg",
        },
        {
            id: 2,
            userId: 2,
            name: currentUser?.name || "Laurent Garcia",
            profilePic: currentUser?.profilePic || "https://images.pexels.com/photos/27690887/pexels-photo-27690887.jpeg",
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