import { Router } from 'express';
import multer from 'multer';

import { listCategoriesController } from '../modules/cars/use-cases/list-categories';
import { importCategoriesController } from '../modules/cars/use-cases/import-categories';
import { CreateCategoryController } from '../modules/cars/use-cases/create-category/CreateCategoryController';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', (request, response) =>
  listCategoriesController.handle(request, response),
);

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
  importCategoriesController.handle(request, response);
});

export { categoriesRoutes };
