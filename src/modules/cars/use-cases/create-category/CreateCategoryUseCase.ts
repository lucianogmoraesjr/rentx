import { ICategoriesRepositories } from '../../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

export class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepositories) {}

  async execute({ name, description }: IRequest) {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name,
    );

    if (categoryAlreadyExists) {
      throw new Error('Category already exists.');
    }

    this.categoriesRepository.create({ name, description });
  }
}
