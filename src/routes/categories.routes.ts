import { Router } from 'express';
import multer from 'multer';

import { createCategoryController } from '../modules/cars/use-cases/create-category';
import { listCategoriesController } from '../modules/cars/use-cases/list-categories';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

categoriesRoutes.post('/', (request, response) =>
  createCategoryController.handle(request, response),
);

categoriesRoutes.get('/', (request, response) =>
  listCategoriesController.handle(request, response),
);

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
  const { file } = request;

  console.log(file);

  return response.send();
});

export { categoriesRoutes };
