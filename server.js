const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const methodOverride = require('method-override');
const port = process.env.PORT || 3000;

const indexRoutes = require('./routes/index');
const customerRoutes = require('./routes/customers');

require('dotenv').config();

const app = express();

require('./config/database');
require('./config/passport');

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'SEIRFLEXRocks!',
  resave: false,
  saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));

app.use('/', indexRoutes);
app.use('/', customerRoutes);


app.listen(port, () =>{
    console.log(`Express is listening on port:${port}`);
})
