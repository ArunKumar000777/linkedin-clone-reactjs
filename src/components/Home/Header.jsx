import LinkedinIcon from "../../assets/linkedin.png";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import TextsmsIcon from "@mui/icons-material/Textsms";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppsIcon from "@mui/icons-material/Apps";
import dp from "../../assets/favicon.ico.jpg";
const Header = () => {
    return (
        <header className="bg-primary-bg-color h-14 flex px-52 justify-between">
            <div className="flex gap-2 items-center h-12">
                <img src={LinkedinIcon} alt="logo" className="w-6" />
                <div className="bg-input-bg-color flex items-center rounded-sm justify-center">
                    <div className="flex items-center p-1">
                        <SearchIcon style={{ fontSize: "20px", marginLeft: "10px", color: "gray" }} />
                    </div>
                    <input type="text" className="bg-transparent bg-input-bg-color w-64 h-8" placeholder="Search" />
                </div>
            </div>

            <div className="flex gap-9">
                <div className="flex flex-col items-center justify-center border-b-2 border-b-gray-800">
                    <HomeIcon />
                    <span className="text-sm">Home</span>
                </div>
                <div className="flex flex-col items-center justify-center relative">
                    <div className="w-4 h-4 bg-red-500 rounded-full absolute top-1 right-5 text-white flex items-center justify-center">
                        <span className="text-sm">1</span>
                    </div>
                    <GroupIcon />
                    <span className="text-sm">My Network</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <BusinessCenterIcon />
                    <span className="text-sm">Jobs</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <TextsmsIcon />
                    <span className="text-sm">Messaging</span>
                </div>
                <div className="flex flex-col items-center justify-center relative">
                    <div className="w-4 h-4 bg-red-500 rounded-full absolute top-2 right-6 text-white flex items-center justify-center">
                        <span className="text-sm">5</span>
                    </div>
                    <NotificationsIcon />
                    <span className="text-sm">Notifications</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src={dp} alt="dp" className="w-5 h-5 object-cover rounded-full" />
                    <span className="text-sm">Me</span>
                </div>
            </div>
            <div className="flex">
                <div className="flex flex-col items-center justify-center">
                    <AppsIcon />
                    <span className="text-sm">Work</span>
                </div>
                <a href="#" className="ml-5">
                    <span className="text-sm">Try Premium for</span>
                    <br /> <span>free</span>
                </a>
            </div>
        </header>
    );
};

export default Header;
