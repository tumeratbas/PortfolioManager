import express from 'express';
const router = express.Router();
import auth from '../middleware/auth.js';
import {
    getAllExpenses,
    getExpenseById,
    addExpense,
    updateExpense,
    deleteExpense
} from '../controllers/expenseController.js';

router.get('/', auth, getAllExpenses);
router.get('/:id', auth, getExpenseById);
router.post('/', auth, addExpense);
router.put('/:id', auth, updateExpense);
router.delete('/:id', auth, deleteExpense);

export default router;
