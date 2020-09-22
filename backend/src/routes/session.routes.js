import { Router } from 'express';

import SessionController from '../controllers/SessionController';
import SchemaValidation from '../middlewares/schema-validations/sessionSchema';

const sessionRoute = new Router();

sessionRoute.post('/', SchemaValidation, SessionController.authenticate);

export default sessionRoute;
