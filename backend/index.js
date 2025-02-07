const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const express = require('express');
const authRouter = require ('./routers/auth_router');
const errorHandler = require('./middlewares/error_handler');

const app = express();
app.use(express.json());
app.use(session({
    secret: 'yourSecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false ,httpOnly: true }
  }));



mongoose.connect('mongodb://localhost:27017/MySchedule').then(() => {
 console.log('Connected to MongoDB');
}).catch((error) => {
 console.log('Error connecting to MongoDB');
 console.error(error);
});
app.use('/auth', authRouter);
app.use(errorHandler);
app.listen(3000, () => {
 console.log('Server is running on port 3000');
});
app.get('/', (req, res) => {
 res.send('Hello World');
}
);

