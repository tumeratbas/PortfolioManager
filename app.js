const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const config = require('./config');
const authRoutes = require('./routes/auth');
const expenseRoutes = require('./routes/expenses');
const investmentRoutes = require('./routes/investments');
const userRoutes = require('./routes/users');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(morgan('dev'));

// Routes
app.use('/auth', authRoutes);
app.use('/expenses', expenseRoutes);
app.use('/investments', investmentRoutes);
app.use('/users', userRoutes);

// MongoDB Connection
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
