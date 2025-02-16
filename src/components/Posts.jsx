import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/features/posts/postsSlice";

export default function Posts() {
    const { posts, isLoading, isError, error } = useSelector(
        (state) => state.posts
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    // decide what to render
    let content = null;

    if (isLoading) {
        content = <h1>Loading posts...</h1>;
    } else if (!isLoading && isError) {
        content = (
            <h1 className="text-red-500">
                {error || "There was an error fetching posts!"}
            </h1>
        );
    } else if (!isLoading && !isError && posts.length === 0) {
        content = <h1>No posts found!</h1>;
    } else if (!isLoading && !isError && posts.length > 0) {
        content = (
            <ul className="list-decimal">
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        );
    }

    return (
        <div className="p-12 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            {content}
        </div>
    );
}
