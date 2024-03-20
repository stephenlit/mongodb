const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const colors = require('colors');
const connectDB = require('./config/db');

require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');

const PORT = 5000;
connectDB();
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

app.use('/api/messages', require('./routes/messageRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use(errorHandler);



app.listen(5000, () => {
    console.log(`Listening on ${PORT}`);
});
