import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ImportCategoriesController } from './ImportCategoriesController';
import { ImportCategoriesUseCase } from './ImportCategoriesUseCase';

const categoriesRepsitory = null;

const importCategoriesUseCase = new ImportCategoriesUseCase(
  categoriesRepsitory,
);

const importCategoriesController = new ImportCategoriesController(
  importCategoriesUseCase,
);

export { importCategoriesController };
