let express = require('express'),
    path = require('path'),
//    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    config = require('./config'),
    requireFu = require('require-fu'),
    cors = require('cors'),
    app = express(),
    mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(config.database.databaseUrl, {
    useMongoClient: true,
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200
}));
app.set('trust proxy', 1);
app.use(session({
    secret: config.session.secret,
    resave: false,
    saveUninitialized: true,
    cookie: {secure: true}
}));

requireFu(__dirname + '/routes')(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
