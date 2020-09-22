import { Router } from 'express';

import BalanceController from '../controllers/BalanceController';
import AuthMiddleware from '../middlewares/auth';

const balanceRoute = new Router();

balanceRoute.get('/', AuthMiddleware, BalanceController.getBalance);

export default balanceRoute;
