import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ImportCategoriesController } from './ImportCategoriesController';
import { ImportCategoriesUseCase } from './ImportCategoriesUseCase';

const categoriesRepsitory = CategoriesRepository.getInstance();

const importCategoriesUseCase = new ImportCategoriesUseCase(
  categoriesRepsitory,
);

const importCategoriesController = new ImportCategoriesController(
  importCategoriesUseCase,
);

export { importCategoriesController };
