import { Repository, getRepository } from 'typeorm';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../IUsersRepository';
import { User } from '../../entities/User';

export class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  async create({
    name,
    email,
    driver_license,
    password,
  }: ICreateUserDTO): Promise<void> {
    const user = this.ormRepository.create({
      name,
      email,
      driver_license,
      password,
    });

    await this.ormRepository.save(user);
  }
}
