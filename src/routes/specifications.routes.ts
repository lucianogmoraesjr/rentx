import { Router } from 'express';
import { createSpecificationController } from '../modules/cars/use-cases/create-specification';

const specificationsRoutes = Router();

specificationsRoutes.post('/', (request, response) => {
  return createSpecificationController.handle(request, response);
});

export { specificationsRoutes };
