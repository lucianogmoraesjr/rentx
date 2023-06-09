import { Repository, getRepository } from 'typeorm';
import { Specification } from '@modules/cars/infra/typeorm/entities/Specification';
import {
  ISpecificationsRepository,
  ISpecificationDTO,
} from '@modules/cars/repositories/ISpecificationsRepository';

export class SpecificationsRepository implements ISpecificationsRepository {
  private ormRepository: Repository<Specification>;

  constructor() {
    this.ormRepository = getRepository(Specification);
  }

  async create({
    name,
    description,
  }: ISpecificationDTO): Promise<Specification> {
    const specification = this.ormRepository.create({
      name,
      description,
    });

    await this.ormRepository.save(specification);

    return specification;
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.ormRepository.findOne({ name });

    return specification;
  }

  async findByIds(ids: string[]): Promise<Specification[]> {
    const specifications = await this.ormRepository.findByIds(ids);
    return specifications;
  }
}
