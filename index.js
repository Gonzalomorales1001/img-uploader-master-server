const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();

//importing routes
const uploadRoute = require('./routes/uploadRoute');

app.use(cors());
app.use(express.json());
app.use(express.static('tmp'));

app.use('/api/upload', uploadRoute);

app.get('/', function (req, res) {
    res.send('API for Uploader IMG');
});

app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`);
});