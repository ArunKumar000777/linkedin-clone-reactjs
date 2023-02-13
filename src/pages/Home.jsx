import React from "react";
import LeftSideBar from "../components/Home/LeftSideBar";
import PostMiddleSection from "../components/Home/PostMiddleSection";
import RightSideBar from "../components/Home/RightSideBar";

const Home = () => {
    return (
        <main className="w-full pt-7 bg-secondary-bg-color min-h-screen lg:px-48 flex">
            <LeftSideBar />
            <PostMiddleSection />
            <RightSideBar />
        </main>
    );
};

export default Home;
