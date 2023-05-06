import { Router } from 'express';
import { CreateRentalController } from '@modules/rentals/use-cases/create-rental/CreateRentalController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticate';
import { ReturnRentalController } from '@modules/rentals/use-cases/return-rental/ReturnRentalController';

const rentalRoutes = Router();

const createRentalController = new CreateRentalController();
const returnRentalController = new ReturnRentalController();

rentalRoutes.post('/', ensureAuthenticated, createRentalController.handle);
rentalRoutes.post(
  '/return/:id',
  ensureAuthenticated,
  returnRentalController.handle,
);

export { rentalRoutes };
