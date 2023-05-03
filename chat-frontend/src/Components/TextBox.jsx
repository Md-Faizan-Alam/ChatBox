import { useEffect, useState } from "react";
import Message from "../Model/Message.js";

const TextBox = (props) => {
    const [text, setText] = useState("");

    const handleType = (event) => {
        setText(event.target.value);
    };

    const handleSend = () => {
        if (text === "") return;
        setText("");
        const message = new Message(props.username, text);
        props.addMessage(message);
        scrollToBottom();
    };

    const handleEnter = (event) => {
        if (event.key === "Enter") {
            document.getElementById("send-button").click();
        }
    };

    useEffect(() => {
        const textbox = document.getElementById("textbox");
        const handleFocusIn = () => {
            textbox.addEventListener("keypress", handleEnter);
        };
        const handleFocusOut = () => {
            textbox.removeEventListener("keypress", handleEnter);
        };
        textbox.addEventListener("focusin", handleFocusIn);
        textbox.addEventListener("focusout", handleFocusOut);
    }, []);

    const scrollToBottom = () => {
        window.scrollTo(0, document.body.scrollHeight);
    };
    return (
        <div className="container-fluid position-fixed bottom-0 bg-dark py-2 px-3">
            <div className="row">
                <div className="col px-1">
                    <input
                        value={text}
                        onChange={handleType}
                        className="border-0 p-1 outline-0 w-100 rounded-2 m-0"
                        type="text"
                        onClick={scrollToBottom}
                        id={"textbox"}
                    />
                </div>
                <div className="col-2 col-md-1 p-0 d-flex align-items-center">
                    <button
                        className="btn btn-primary mx-2 py-0 px-2"
                        onClick={handleSend}
                        id={"send-button"}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TextBox;
