import PostformMiddle from "./PostformMiddle";
import Posts from './Posts'

const PostMiddleSection = () => {
    return (
        <div className=" lg:w-[34rem] lg:ml-7 w-full">
            {/* post input */}
            <PostformMiddle />
            <hr className="mt-4 border-2 mb-2" />
            <Posts />
        </div>
    );
};

export default PostMiddleSection;
