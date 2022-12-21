const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
let bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
const todosRoute = require('./routes/todo');

app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors());
app.use(express.json());
app.use('/api/todo', todosRoute);
dotenv.config();

mongoose.connect(process.env.MONGO_URL, () => {
	console.log('Connected to MongoDB');
});

app.listen(8000, () => {
	console.log('Server is running...');
});
