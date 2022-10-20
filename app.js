const  express = require('express');
const  path = require('path');
const  cookieParser = require('cookie-parser');
const  logger = require('morgan');
const cors =require('cors')
const db=require('./db')
const  productsRouter = require('./routes/products');


const  app = express();
app.use(cors())

// view engine setup
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
db();

app.use('/products', productsRouter);


module.exports = app;
