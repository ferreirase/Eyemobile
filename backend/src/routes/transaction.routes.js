import { Router } from 'express';

import TransactionController from '../controllers/TransactionController';
import CreateTransactionSchema from '../middlewares/schema-validations/createTransactionSchema';
import AuthMiddleware from '../middlewares/auth';

const transactionRoutes = new Router();

transactionRoutes.post(
  '/',
  [AuthMiddleware, CreateTransactionSchema],
  TransactionController.createTransaction
);

transactionRoutes.get('/', [AuthMiddleware], TransactionController.showAll);

export default transactionRoutes;
