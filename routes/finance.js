import express from 'express';
import { fetchCompanyData } from '../controllers/financeController.js';

const router = express.Router();

//stackoverflow'dan baktım.
/**
 * @swagger
 * /finance/search/{query}:
 *   get:
 *     summary: Search for company data
 *     parameters:
 *       - in: path
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: The search query for the company
 *     responses:
 *       200:
 *         description: A list of companies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       500:
 *         description: Server error
 */
router.get('/search/:query', fetchCompanyData);

export default router;
