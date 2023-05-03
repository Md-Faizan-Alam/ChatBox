import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import ChatPage from "./Components/Pages/ChatPage";
import LoginPage from "./Components/Pages/LoginPage";

function App() {
    const [username,setUsername] = useState("");
    return (
        <>
        <Routes>
            <Route path="/" element={<LoginPage setUsername={setUsername} />} />
            <Route path="/chat" element={<ChatPage username={username} />} />
        </Routes>
        </>
    );
}

export default App;
