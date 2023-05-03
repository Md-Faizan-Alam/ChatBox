import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MessagingService from "../../Service/MessagingService";
import ChatRoom from "../ChatRoom";
import Navbar from "../Navbar";
import TextBox from "../TextBox";

const ChatPage = (props) => {
    const navigate = useNavigate();
    const [messageList, setMessageList] = useState([]);

    const addMessage = async (message) => {
        await MessagingService.postMessage(message);
    };

    const getAllMessages = async () => {
        const data = await MessagingService.getMessageList();
        setMessageList(data);
        window.scrollTo(0, document.body.scrollHeight);
        setTimeout(() => {
            getAllMessages();
        }, 25);
    };

    useEffect(() => {
        if(props.username === ""){
            navigate("/");
            return;
        }
        getAllMessages();
        window.scrollTo(0, document.body.scrollHeight);
        console.log('rendered')
        
    }, []);

    return (
        <div>
            <Navbar />
            <ChatRoom messageList={messageList} username={props.username} />
            <TextBox addMessage={addMessage} username={props.username} />
        </div>
    );
};

export default ChatPage;
