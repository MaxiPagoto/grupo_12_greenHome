const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session')
const methodOverride = require('method-override'); // Para usar Metodos PUT y DELETE

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productRouter = require('./routes/product');
const inspireRouter = require('./routes/inspire');
const apisUsersRouter = require('./routes/api/apiUsersRouter');
const apisPostsRouter = require('./routes/api/apiPostRouter');
const apisCartRouter = require('./routes/api/apiPostRouter');
const cookiesCheck = require('./middlewares/cookiesCheck')
const sessionCheck = require('./middlewares/sessionCheck')

const app = express();

// Middlewares 

app.use(methodOverride('_method')); // Pisa el metodo POST por el PUT y DELETE

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: 'Mmm',
  resave: true,
  saveUninitialized: true,
}));
app.use(cookieParser());
app.use(cookiesCheck);
app.use(sessionCheck);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productRouter);
app.use('/inspire', inspireRouter);
app.use('/api/users', apisUsersRouter);
app.use('/api/posts', apisPostsRouter);
app.use('/api/cart', apisCartRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
