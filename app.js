const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const methodOverride = require('method-override');
const session = require("express-session");
const compression = require('compression');
const jwt = require('jsonwebtoken');

// Express()
const app = express();
// Compress all responses
app.use(compression())

// Middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());

app.use(session({
	resave: true, 
	saveUninitialized: true, 
	secret: 'ivum-2020',
	_expires: 600000
}));
// Custom Middlewares

// Session Storage

// CORS
app.use(cors())

// Routes
const usuariosRouter = require('./routes/usuarios')
const medicosRouter = require('./routes/medicos')
const pacientesRouter = require('./routes/pacientes')
const consultasRouter = require('./routes/consultas')

app.use('/usuarios', usuariosRouter);
app.use('/medicos', medicosRouter);
app.use('/pacientes', pacientesRouter);
app.use('/consultas', consultasRouter);

// catch 404 
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

// Export App
module.exports = app;
