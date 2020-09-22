import { Router } from 'express';
import SessionsRoute from './session.routes';
import UsersRoutes from './user.routes';
import TransactionsRoutes from './transaction.routes';
import BalanceRoutes from './balance.routes';

const routes = Router();

routes.use('/sessions', SessionsRoute);
routes.use('/users', UsersRoutes);
routes.use('/transactions', TransactionsRoutes);
routes.use('/balances', BalanceRoutes);

export default routes;
