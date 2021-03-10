const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParse = require('cookie-parser');
const expressValidator = require('express-validator');
require('dotenv').config();

const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const categoryRoutes = require('./routes/category');
const ProductRoutes = require('./routes/product');

//app
const app = express();

// db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connected successfully...')
})

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParse());
app.use(expressValidator());

//routes middlewares

app.use('/api', userRoutes);
app.use('/api', authRoutes);
app.use('/api', categoryRoutes);
app.use('/api', ProductRoutes);

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})