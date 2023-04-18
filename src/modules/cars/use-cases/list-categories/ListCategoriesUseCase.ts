import { Category } from '../../entities/Category';
import { ICategoriesRepositories } from '../../repositories/Category/ICategoriesRepository';

export class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepositories) {}

  execute(): Category[] | undefined {
    const categories = this.categoriesRepository.list();

    return categories;
  }
}
