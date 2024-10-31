const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoute = require('./routes/user');
const chatRoute = require('./routes/chat');


const app = express();
require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoute);
app.use("/api/chats", chatRoute);

const port = process.env.PORT || 5000;
const url = process.env.MONGO_URL ;

app.listen(port, (req, res) => {
    console.log(`Server started on port: ${port}`);
})

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to the database'))
    .catch(err => console.log(err));