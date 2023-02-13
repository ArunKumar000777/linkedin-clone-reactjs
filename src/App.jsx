import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Home/Header";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Me from "./pages/Me";
import Messaging from "./pages/Messaging";
import MyNetwork from "./pages/MyNetwork";
import Notifications from "./pages/Notifications";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mynetwork" element={<MyNetwork/>}/>
                <Route path="/jobs" element={<Jobs/>}/>
                <Route path="/messaging" element={<Messaging/>}/>
                <Route path="/notifications" element={<Notifications/>}/>
                <Route path="/me" element={<Me/>}/>
            </Routes>
        </div>
    );
}

export default App;
