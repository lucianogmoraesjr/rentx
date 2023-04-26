import { inject, injectable } from 'tsyringe';
import { ICategoriesRepositories } from '../../repositories/ICategoriesRepository';
import { AppError } from '../../../../errors/AppError';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepositories,
  ) {}

  async execute({ name, description }: IRequest) {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name,
    );

    if (categoryAlreadyExists) {
      throw new AppError('Category already exists.');
    }

    this.categoriesRepository.create({ name, description });
  }
}
