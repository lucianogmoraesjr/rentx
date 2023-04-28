import { Router } from 'express';
import multer from 'multer';
import { CreateCategoryController } from '@modules/cars/use-cases/create-category/CreateCategoryController';
import { ImportCategoriesController } from '@modules/cars/use-cases/import-categories/ImportCategoriesController';
import { ListCategoriesController } from '@modules/cars/use-cases/list-categories/ListCategoriesController';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

const createCategoryController = new CreateCategoryController();
const importCategoriesController = new ImportCategoriesController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', listCategoriesController.handle);

categoriesRoutes.post(
  '/import',
  upload.single('file'),
  importCategoriesController.handle,
);

export { categoriesRoutes };
