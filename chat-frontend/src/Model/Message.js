class Message{
    constructor(sender,text){
        this.time = new Date().toISOString();
        this.text = text;
        this.sender = sender;
    }
}

export default Message;