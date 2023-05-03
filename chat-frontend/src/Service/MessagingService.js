import axios from "axios";

const MessagingService = {
    getMessageList: async () => {
        let data = await axios
            .get(process.env.REACT_APP_GET_PATH_PC+"/list")
            .then((response) => response.data)
            .catch((error) => console.error(error));
        if (data === undefined) {
            data = await axios
                .get(process.env.REACT_APP_GET_PATH_MOBILE+"/list")
                .then((response) => response.data)
                .catch((error) => console.error(error));
        }
        return data;
    },
    postMessage: async (message) => {
        await axios
            .post(process.env.REACT_APP_GET_PATH_PC+"/send", message)
            .catch(async (error) => {
                console.error(error);
                await axios
                    .post(process.env.REACT_APP_GET_PATH_MOBILE+"/send", message)
                    .catch((err) => console.log(err));
            });
    },
};

export default MessagingService;
