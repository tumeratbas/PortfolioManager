import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import authRoutes from './routes/auth.js';
import expenseRoutes from './routes/expenses.js';
import investmentRoutes from './routes/investments.js'; 
import userRoutes from './routes/users.js'; 
import financeRoutes from './routes/finance.js'; 
import swagger from './swagger.js';
import { fetchStockData } from './services/fetchData.js';

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(morgan('dev'));

app.set('view engine', 'ejs');

// Routelar
app.use('/auth', authRoutes);
app.use('/expenses', expenseRoutes);
app.use('/investments', investmentRoutes);
app.use('/users', userRoutes);
app.use('/finance', financeRoutes); 

// Swagger
swagger(app);

// Yeni API endpoint'i
app.get('/stocks/:symbol', async (req, res) => {
    const symbol = req.params.symbol;
    try {
        const data = await fetchStockData(symbol);
        res.json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/', (req, res) => {
  res.render('index');
});

// MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
