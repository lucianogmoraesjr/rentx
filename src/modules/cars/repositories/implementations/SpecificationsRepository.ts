import { Repository, getRepository } from 'typeorm';
import { Specification } from '@modules/cars/entities/Specification';
import {
  ISpecificationsRepository,
  ISpecificationDTO,
} from '../ISpecificationsRepository';

export class SpecificationsRepository implements ISpecificationsRepository {
  private ormRepository: Repository<Specification>;

  constructor() {
    this.ormRepository = getRepository(Specification);
  }

  async create({ name, description }: ISpecificationDTO): Promise<void> {
    const specification = this.ormRepository.create({
      name,
      description,
    });

    await this.ormRepository.save(specification);
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.ormRepository.findOne({ name });

    return specification;
  }
}
