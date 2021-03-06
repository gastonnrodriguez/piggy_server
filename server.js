const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');
dotenv.config({path:'./config/config.env'});

connectDB();

const transactions = require('./routes/transactionRoutes');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use('/api/v1/transactions', transactions);

app.listen(PORT, console.log(`🐷 Server running on port ${PORT} 🐷`.yellow.bold));