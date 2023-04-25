import { Router } from 'express';
import { CreateUserController } from '../modules/accounts/use-cases/create-user/CreateUserController';

const usersRoutes = Router();

const createUserController = new CreateUserController();

usersRoutes.post('/', createUserController.handle);

export { usersRoutes };
