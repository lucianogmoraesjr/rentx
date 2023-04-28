import { inject, injectable } from 'tsyringe';
import { Category } from '@modules/cars/entities/Category';
import { ICategoriesRepositories } from '@modules/cars/repositories/ICategoriesRepository';

@injectable()
export class ListCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepositories,
  ) {}

  async execute(): Promise<Category[] | undefined> {
    const categories = await this.categoriesRepository.list();

    return categories;
  }
}
