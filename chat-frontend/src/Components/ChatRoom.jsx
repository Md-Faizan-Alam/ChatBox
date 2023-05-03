import Bubble from "./Bubble";

const ChatRoom = (props) => {
    return (
        <>
            <div className="container-fluid min-vh-100 py-6 d-flex flex-column justify-content-end gap-2 bg-chat">
                {props.messageList?.map((element) => {
                    return <Bubble key={element.time} message={element} username={props.username} />;
                })}
            </div>
        </>
    );
};

export default ChatRoom;
