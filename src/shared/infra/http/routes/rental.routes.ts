import { Router } from 'express';
import { CreateRentalController } from '@modules/rentals/use-cases/create-rental/CreateRentalController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticate';

const rentalRoutes = Router();

const createRentalController = new CreateRentalController();

rentalRoutes.post('/', ensureAuthenticated, createRentalController.handle);

export { rentalRoutes };
