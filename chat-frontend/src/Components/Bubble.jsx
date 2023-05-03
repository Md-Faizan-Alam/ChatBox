const Message = (props) => {

    const ifSender = (yes,no)=> {
        return props.message.sender === props.username ? yes : no;
    }

    return (
        <div className={`row py-1 justify-content-${ifSender("end","start")}`}>
            <div className={`col-auto pb-2 px-3 rounded-3 mx-3 bg-${ifSender("sent","recieved")} fw-semibold`}>
                <div className="row ps-1 sender me-2 text-nowrap ">
                    {props.message.sender}
                </div>
                <div className="row px-2 message">
                    {props.message.text}
                </div>
            </div>
        </div>
    );
};

export default Message;
