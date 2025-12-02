import Post from "../post/Post";
import "./posts.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Posts = ({ userId }) => {
    const { isLoading, error, data } = useQuery({
        queryKey: ["posts", userId],
        queryFn: () =>
            makeRequest.get("/posts" + (userId ? "?userId=" + userId : "")).then((res) => res.data),
        enabled: true,
        initialData: [],
    });

    return (
        <div className="posts">
            {isLoading && <div>loading</div>}
            {error && <div>Something went wrong!</div>}
            {!isLoading && !error && (data?.length ? data.map((post) => <Post post={post} key={post.id} />) : <div>No posts</div>)}
        </div>
    );
};

export default Posts;