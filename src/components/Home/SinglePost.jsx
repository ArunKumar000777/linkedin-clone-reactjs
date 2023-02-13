import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import dp from "../../assets/favicon.ico.jpg";
import PublicIcon from "@mui/icons-material/Public";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import SyncIcon from "@mui/icons-material/Sync";
import SendIcon from "@mui/icons-material/Send";
const SinglePost = () => {
    return (
        <div className="bg-primary-bg-color py-2 px-4 mt-2 rounded-lg border">
            {/* liked container */}
            <div className="flex  justify-between items-center">
                <div className="flex items-center">
                    <img
                        className="w-6 h-6 object-cover rounded-full"
                        src="https://media.licdn.com/dms/image/C5603AQHz1mnKa4VRGA/profile-displayphoto-shrink_100_100/0/1637514859357?e=1681948800&v=beta&t=t5-4GnnsmdRPQG1FpgW6oFmc0mm9pg8xVBxrN1cSJDs"
                        alt="user"
                    />
                    <span className="ml-4 text-sm font-medium">vipin p</span>
                    <span className="ml-2 text-xs text-gray-500">likes this</span>
                </div>
                <div className=" ">
                    <MoreHorizIcon style={{ color: "gray" }} />
                </div>
            </div>
            <hr className="mt-4" />
            {/* post info container */}
            <div>
                {/* user info container */}
                <div className="flex mt-4 items-center justify-between">
                    <div className="flex gap-3  items-center">
                        <img src={dp} alt="userDp" className="w-12 h-12 rounded-full object-cover" />
                        {/* name job posed date container */}
                        <div className="flex flex-col">
                            <span className="font-semibold">ArunKumar K</span>
                            <span className="font-light text-xs"> MERN Stack Developer</span>
                            <div className="flex items-center gap-1">
                                <span className="font-light text-xs">2w </span>
                                <PublicIcon style={{ color: "gray", fontSize: "15px" }} />
                            </div>
                        </div>
                    </div>
                    {/* follow button container*/}
                    <div className="flex items-center justify-center cursor-pointer hover:bg-blue-100 px-3 py-1 rounded-r-md rounded-l-md ">
                        <AddIcon style={{ color: "rgb(59,132,206)", fontSize: "25px" }} />
                        <button className="font-bold text-blue-500 mr-1">Follow</button>
                    </div>
                </div>
                {/* post Desc and image*/}
                <div>
                    <p className="text-sm mt-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam hic magnam natus quo. Eos ab,
                        corrupti quidem placeat nisi voluptas.
                    </p>
                    <img
                        src="https://carambaworld.files.wordpress.com/2017/01/150216003.jpg"
                        alt="postImage"
                        className="mt-5"
                    />
                    <div className="mt-4">
                        <ThumbUpOffAltIcon style={{ color: "rgb(79,130,246)", fontSize: "13px" }} />
                        <span className="text-xs font-semibold text-gray-600">Clevin M. ,</span>
                        <span className="text-xs font-semibold text-gray-600">Wilson</span>
                        <span className="text-xs ml-3">and 4 others </span>
                    </div>
                </div>
                <hr className="mt-3 mb-3" />
                {/* users reactions container */}
                <div className="flex items-center justify-between mt-4 mb-2">
                    <div className="flex items-center gap-1 cursor-pointer">
                        {/* icon */}
                        <ThumbUpOffAltIcon style={{ color: "gray" }} />
                        <span className="text-gray-600">Like</span>
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer">
                        {/* icon */}
                        <InsertCommentIcon style={{ color: "gray" }} />
                        <span className="text-gray-600">Comment</span>
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer">
                        {/* icon */}
                        <SyncIcon style={{ color: "gray" }} />
                        <span className="text-gray-600">Repost</span>
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer">
                        {/* icon */}
                        <SendIcon style={{ color: "gray" }} />
                        <span className="text-gray-600">Send</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePost;
