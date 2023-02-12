import dp from "../../assets/favicon.ico.jpg";
import bg from "../../assets/background.png";
import BookmarkIcon from "@mui/icons-material/Bookmark";
const LeftSideBar = () => {
    return (
        <div className="flex flex-col gap-2">
            <div
                className=" bg-primary-bg-color w-56 relative rounded-md border-b-gray-400 border-2"
                style={{ height: "335px" }}
            >
                <div className="w-full">
                    <div className="w-full h-14">
                        <img src={bg} alt="bg" className="w-full h-full object-cover rounded-t-md" />
                    </div>
                    <img
                        src={dp}
                        alt="dp"
                        className="w-20 h-20 object-cover rounded-full absolute top-5 "
                        style={{ marginLeft: "73px" }}
                    />
                    <h3 className="text-center mt-16 font-medium">ArunKumar k</h3>
                    <h5 className="text-center mt-1 mb-4 text-xs">Full Stack Developer</h5>
                    <hr />
                    <div className="ml-4">
                        <div className="py-2">
                            <span className="text-xs font-medium text-gray-500">Connections</span>
                            <br />
                            <h5 className="text-xs font-medium">Grow your network</h5>
                        </div>
                        <hr />
                        <div className="py-2">
                            <span className="text-xs text-gray-500">Access exclusive tools & insights</span>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-sm bg-yellow-500"></div>
                                <a href="#" className="text-xs font-medium underline mt-1">
                                    Try Premium for free
                                </a>
                            </div>
                        </div>

                        <hr />
                        <div className="flex mt-3 gap-1">
                            <BookmarkIcon style={{ fontSize: "19px" }} />
                            <span className="text-xs font-medium">My items</span>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
            {/* bottom box */}
            <div
                className=" bg-primary-bg-color w-56 relative rounded-md border-b-gray-400 border-2"
                style={{ height: "335px" }}
            >
                <div className="ml-4 mt-2 flex flex-col gap-4">
                    <span className="block text-sm text-gray-500">Recent</span>
                    <span className="block text-blue-600 font-medium text-xs">Groups</span>
                    <span className="block text-blue-600 font-medium text-xs">Events</span>
                    <span className="block text-blue-600 font-medium text-xs">Followed Hashtags</span>
                </div>
            </div>
        </div>
    );
};

export default LeftSideBar;
