import { Router } from 'express';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', async (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  await createCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
  const categories = categoriesRepository.list();

  return response.json(categories);
});

export { categoriesRoutes };
