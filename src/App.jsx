import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Home/Header";
import Home from "./pages/Home";

function App() {
    return (
        <div className="App">
            <Header />
            <Home/>
        </div>
    );
}

export default App;
