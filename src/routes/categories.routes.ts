import { Router } from 'express';
import { createCategoryController } from '../modules/cars/use-cases/create-category';
import { listCategoriesController } from '../modules/cars/use-cases/list-categories';

const categoriesRoutes = Router();

categoriesRoutes.post('/', (request, response) =>
  createCategoryController.handle(request, response),
);

categoriesRoutes.get('/', (request, response) =>
  listCategoriesController.handle(request, response),
);

export { categoriesRoutes };
