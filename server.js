const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();
const PORT = 5000;
const db = process.env.MONGO_URI;

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

app.use('/api', require('./routes/messageRoutes'));

try {
    mongoose.connect(
        // 'mongodb+srv://stevish45:Bingo!23@littleroad.jligexa.mongodb.net/?retryWrites=true&w=majority&appName=LittleRoad'
        db
    );
    console.log('connected to mongodb');
} catch (error) {
    console.log(`Something went wrong ${error}`);
}

app.listen(5000, () => {
    console.log(`Listening on ${PORT}`);
});
