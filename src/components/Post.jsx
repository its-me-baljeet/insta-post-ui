import { CiHeart } from "react-icons/ci";
import { FcLike } from "react-icons/fc";
import { FiMessageCircle } from "react-icons/fi";
import { BsSend } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";

const Post = ({ postData, setPosts }) => {
    const { id, username, isLiked, caption } = postData;

    function toggleLike() {
        setPosts(
            (prevPosts) => {
                const updatedPosts = [...prevPosts];
                updatedPosts.map((post) => {
                    if (post.id === id) {
                        post.isLiked = !isLiked;
                        return post;
                    }
                    return post;
                });
                localStorage.setItem("postsList", JSON.stringify(updatedPosts));
                return updatedPosts;
            }
        )
    }

    return (
        <div className="w-[20vw] bg-black p-5 text-white">
            <div className="flex gap-2 items-center">
                <div className="h-10 w-10 rounded-full bg-[grey]"></div>
                <div>{username}</div>
            </div>
            <div className="h-[40vh] flex justify-center items-center">
                Picture
            </div>
            <div className="flex w-[100%] justify-between">

                <div className="flex w-[5vw] justify-evenly">
                    <div onClick={toggleLike}>
                        {
                            isLiked ? <FcLike /> : <CiHeart />
                        }
                    </div>
                    <div>
                        <FiMessageCircle />
                    </div>
                    <div>
                        <BsSend />
                    </div>


                </div>
                <div><CiBookmark /></div>
            </div>
            <div className="p-2 flex-wrap">
                {username}
                <div className="text-[gray] overflow-ellipsis">
                    {caption}
                </div>
            </div>
        </div>
    )
}
export default Post;