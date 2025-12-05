import { useContext, useState } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import moment from "moment";

const Comments = ({ postId }) => {
    const [desc, setDesc] = useState("");
    const { currentUser } = useContext(AuthContext);

    const resolveProfilePic = (pic) => {
        const fallback = "https://images.pexels.com/photos/27690887/pexels-photo-27690887.jpeg";
        if (!pic) return fallback;
        if (pic.startsWith("http") || pic.startsWith("/")) return pic;
        return "/upload/" + pic;
    };

    const { isLoading, error, data } = useQuery({
        queryKey: ["comments", postId],
        queryFn: () => makeRequest.get("/comments?postId=" + postId).then((res) => res.data),
    });

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (newComment) => {
            return makeRequest.post("/comments", newComment);
        },
        onSuccess: () => {
            // Invalidate and refetch comments for this post
            queryClient.invalidateQueries({ queryKey: ["comments", postId] });
        },
    });

    const handleClick = async (e) => {
        e.preventDefault();
        mutation.mutate({ desc, postId });
        setDesc("");
    };

    return (
        <div className="comments">
            <div className="write">
                <img src={resolveProfilePic(currentUser?.profilePic)} alt="" />
                <input
                    type="text"
                    placeholder="write a comment"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                />
                <button onClick={handleClick}>Send</button>
            </div>
            {error
                ? "Something went wrong"
                : isLoading
                    ? "loading"
                    : data.map((comment) => (
                        <div className="comment" key={comment.id}>
                            <img src={resolveProfilePic(comment.profilePic)} alt="" />
                            <div className="info">
                                <span>{comment.name}</span>
                                <p>{comment.desc}</p>
                            </div>
                            <span className="date">
                                {moment(comment.createdAt).fromNow()}
                            </span>
                        </div>
                    ))}
        </div>
    );
};

export default Comments;