import { Router } from 'express';
import { CreateCarController } from '@modules/cars/use-cases/create-car/CreateCarController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticate';
import { ensureAdmin } from '../middlewares/ensureAdmin';

const carsRoutes = Router();

const createCarController = new CreateCarController();

carsRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle,
);

export { carsRoutes };
