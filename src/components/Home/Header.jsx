import LinkedinIcon from "../../assets/linkedin.png";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import TextsmsIcon from "@mui/icons-material/Textsms";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppsIcon from "@mui/icons-material/Apps";
import dp from "../../assets/favicon.ico.jpg";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-primary-bg-color h-14 flex lg:px-[192px] lg:justify-between px-5 justify-around sticky top-0 z-40 ">
            <div className="flex gap-2 items-center h-12">
                <Link to={"/"}>
                    <img src={LinkedinIcon} alt="logo" className="w-6" />
                </Link>
                <div className="lg:bg-input-bg-color flex items-center rounded-sm justify-center  ">
                    <div
                        className="flex items-center p-1 justify-center
                    "
                    >
                        <SearchIcon style={{ fontSize: "25px", color: "gray" }} />
                    </div>
                    <input
                        type="text"
                        className="bg-transparent bg-input-bg-color w-64 h-8 hidden lg:block"
                        placeholder="Search"
                    />
                </div>
            </div>

            <div className="flex lg:gap-9 md:gap14 gap-7 border-r border-gray-300 pr-10">
                {/* home */}
                <NavLink to={"/"}>
                    <div className="flex flex-col items-center justify-center  cursor-pointer  h-full">
                        <HomeIcon />
                        <span className="text-sm hidden lg:block">Home</span>
                    </div>
                </NavLink>
                {/* my network */}
                <NavLink to={"/mynetwork"}>
                    <div className="flex flex-col items-center justify-center relative cursor-pointer  h-full">
                        <div className="w-4 h-4 bg-red-500 rounded-full absolute top-1 right-5 text-white flex items-center justify-center ">
                            <span className="text-sm">1</span>
                        </div>
                        <GroupIcon />
                        <span className="text-sm hidden lg:block">My Network</span>
                    </div>
                </NavLink>
                {/* jobs */}
                <NavLink to={"/jobs"}>
                    <div className="flex flex-col items-center justify-center cursor-pointer h-full">
                        <BusinessCenterIcon />
                        <span className="text-sm hidden lg:block">Jobs</span>
                    </div>
                </NavLink>
                {/* messaging */}
                <NavLink to={'/messaging'}>
                    <div className="flex flex-col items-center justify-center cursor-pointer h-full">
                        <TextsmsIcon />
                        <span className="text-sm hidden lg:block">Messaging</span>
                    </div>
                </NavLink>
                {/* notifications */}
                <NavLink to={'/notifications'}>
                    <div className="flex flex-col items-center justify-center relative cursor-pointer h-full">
                        <div className="w-4 h-4 bg-red-500 rounded-full absolute top-2 right-6 text-white flex items-center justify-center">
                            <span className="text-sm">5</span>
                        </div>
                        <NotificationsIcon />
                        <span className="text-sm hidden lg:block">Notifications</span>
                    </div>
                </NavLink>
                {/* me */}
                <NavLink to={'/me'}>
                    <div className="flex flex-col items-center justify-center cursor-pointer h-full">
                        <img src={dp} alt="dp" className="w-5 h-5 object-cover rounded-full" />
                        <span className="text-sm hidden lg:block">Me</span>
                    </div>
                </NavLink>
            </div>
            <div className="lg:flex hidden lg:block cursor-pointer">
                <div className="flex flex-col items-center justify-center">
                    <AppsIcon style={{ color: "gray", fontSize: "28px" }} />
                    <span className="text-sm hidden lg:block">Work</span>
                </div>
                <a href="#" className="ml-5">
                    <span className="text-xs text-amber-800 underline">Try Premium for</span>
                    <br /> <span className="text-xs text-amber-800 underline">free</span>
                </a>
            </div>
        </header>
    );
};

export default Header;
