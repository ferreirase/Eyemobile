import { Router } from 'express';

import UserController from '../controllers/UserController';
import CreateUserSchema from '../middlewares/schema-validations/createUserSchema';

const userRoutes = new Router();

userRoutes.post('/', CreateUserSchema, UserController.createUser);

export default userRoutes;
