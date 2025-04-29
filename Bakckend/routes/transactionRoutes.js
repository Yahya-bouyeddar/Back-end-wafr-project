import express from 'express';
import { getAllTransactions, getTransactionsByUser } from '../controllers/transactionController.js';

const router = express.Router();

router.get('/', getAllTransactions);
router.get('/user/:id', getTransactionsByUser);

export default router;
