const express = require('express');
const cors = require('cors');
const app = express();
const connectMongoDB = require('./database/mongoDB');
const fileUpload = require('express-fileupload');
require('dotenv').config();
//importing routes
const imgRoute = require('./routes/imgRoute');

app.use(cors());
app.use(express.json());
app.use(express.static('tmp'));
app.use(fileUpload());

connectMongoDB();

app.use('/img', imgRoute);

app.get('/', function (req, res) {
    res.send('API for Uploader IMG');
});

app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`);
});