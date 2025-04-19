import { useState } from "react";
import PostSec from "./components/PostSec";

const Insta = () => {
    const initialPosts = JSON.parse(localStorage.getItem("postsList"));
    const [posts, setPosts] = useState(initialPosts);
    return (
        <div className="h-[100vh] flex flex-col justify-start items-center gap-8 bg-[#191919] text-white">
            <h1 className="text-4xl font-bold">Instagram</h1>
            <PostSec posts={posts} setPosts={setPosts} />
        </div>
    )
}
export default Insta;