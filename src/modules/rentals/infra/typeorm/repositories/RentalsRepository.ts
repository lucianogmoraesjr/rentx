import { ICreateRentalDTO } from '@modules/rentals/dtos/ICreateRentalDTO';
import { IRentalsRepository } from '@modules/rentals/repositories/IRentalsRepository';
import { Rental } from '../entities/Rental';
import { Repository, getRepository } from 'typeorm';

export class RentalsRepository implements IRentalsRepository {
  private ormRepository: Repository<Rental>;

  constructor() {
    this.ormRepository = getRepository(Rental);
  }

  async findOpenRentalByCarId(car_id: string): Promise<Rental> {
    const openRentalByCarId = await this.ormRepository.findOne({ car_id });
    return openRentalByCarId;
  }
  async findOpenRentalByUserId(user_id: string): Promise<Rental> {
    const openRentalByUserId = await this.ormRepository.findOne({ user_id });
    return openRentalByUserId;
  }
  async create({
    car_id,
    user_id,
    expected_return_date,
  }: ICreateRentalDTO): Promise<Rental> {
    const rental = this.ormRepository.create({
      car_id,
      user_id,
      expected_return_date,
    });

    await this.ormRepository.save(rental);

    return rental;
  }
}
