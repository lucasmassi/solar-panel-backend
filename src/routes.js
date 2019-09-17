import { Router } from 'express';

import UserController from './app/controllers/UserController';
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

// routes.get('/appointments', AppointmentController.index);
// routes.post('/appointments', AppointmentController.store);
// routes.delete('/appointments/:id', AppointmentController.delete);

export default routes;
