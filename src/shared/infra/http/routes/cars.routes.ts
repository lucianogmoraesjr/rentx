import { Router } from 'express';
import { CreateCarController } from '@modules/cars/use-cases/create-car/CreateCarController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticate';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ListAvailableCarsController } from '@modules/cars/use-cases/list-available-cars/ListAvailableCarsController';
import { CreateCarSpecificationController } from '@modules/cars/use-cases/create-car-specification/CreateCarSpecificationController';

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarSpecificationController = new CreateCarSpecificationController();

carsRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle,
);

carsRoutes.get('/available', listAvailableCarsController.handle);

carsRoutes.post(
  '/specifications/:id',
  ensureAuthenticated,
  ensureAdmin,
  createCarSpecificationController.handle,
);

export { carsRoutes };
