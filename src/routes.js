import { Router } from 'express';

import UserController from './app/controllers/UserController';
import PanelController from './app/controllers/PanelController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

// Guest
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// Middleware de autenticação
routes.use(authMiddleware);

// Auth
routes.put('/users', UserController.update);
routes.get('/panels', PanelController.index);

export default routes;
