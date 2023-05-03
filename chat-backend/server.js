import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import Message from './Model/Message.js';

dotenv.config();

const corsOptions = {
    origin: '*',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

// const messageList = [];

app.get('/list', async (req, res) => {
    const messageList = await Message.find().catch((error) =>
        console.log(error)
    );
    res.send(messageList);
});

app.post('/send', async (req, res) => {
    const message = new Message(req.body);
    message.save();
});

function startServer() {
    app.listen(9999, process.env.PC_HOST || process.env.MOBILE_HOST, () => {
        console.log('Server Started');
    });
}

mongoose.connect(
    process.env.DATABASE_URL,
    {
        useNewUrlParser: true,
    },
    (error) => {
        if (error) {
        console.log('Unable to Connect to MongoDB due to following error');
        console.table(error);
    } else {
        console.log('Connected to MongoDB');
        startServer();
    }
}
);
