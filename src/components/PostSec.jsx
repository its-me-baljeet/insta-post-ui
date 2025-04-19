import Post from "./Post";

const PostSec = ({ posts, setPosts }) => {
    return (
        <div className="flex gap-5">
            {
                posts.map((post) => {
                    return <Post postData={post} setPosts={setPosts} />
                })
            }
        </div>
    );
}
export default PostSec;