const Expense = require('../models/Expense');

const addExpense = async (req, res) => {
  const { amount, category } = req.body;
  const userId = req.user.userId;
  try {
    const expense = new Expense({ amount, category, userId });
    await expense.save();
    res.status(201).json(expense);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getExpenses = async (req, res) => {
  const userId = req.user.userId;
  try {
    const expenses = await Expense.find({ userId });
    res.status(200).json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateExpense = async (req, res) => {
  const { id } = req.params;
  const { amount, category } = req.body;
  try {
    const expense = await Expense.findByIdAndUpdate(id, { amount, category }, { new: true });
    res.status(200).json(expense);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteExpense = async (req, res) => {
  const { id } = req.params;
  try {
    await Expense.findByIdAndDelete(id);
    res.status(200).json({ message: 'Expense deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { addExpense, getExpenses, updateExpense, deleteExpense };
