import { IRentalsRepository } from '@modules/rentals/repositories/IRentalsRepository';
import { RentalsRepositoryInMemory } from '@modules/rentals/repositories/in-memory/RentalsRepositoryInMemory';
import { CreateRentalUseCase } from './CreateRentalUseCase';
import { AppError } from '@shared/errors/AppError';
import dayjs from 'dayjs';
import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider';
import { DayjsDateProvider } from '@shared/container/providers/DateProvider/implementations/DayjsDateProvider';

let rentalsRepositoryInMemory: IRentalsRepository;
let dayJsDateProvider: IDateProvider;
let createRentalUseCase: CreateRentalUseCase;

describe('Create Rental', () => {
  const dayAdd24h = dayjs().add(1, 'day').toDate();
  beforeEach(() => {
    rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
    dayJsDateProvider = new DayjsDateProvider();
    createRentalUseCase = new CreateRentalUseCase(
      rentalsRepositoryInMemory,
      dayJsDateProvider,
    );
  });

  it('should be able to create a new rental', async () => {
    const rental = await createRentalUseCase.execute({
      user_id: 'user-id',
      car_id: 'car-id',
      expected_return_date: dayAdd24h,
    });

    expect(rental).toHaveProperty('id');
  });

  it('should not be able to create a new rental if user already has an open rental', async () => {
    await createRentalUseCase.execute({
      user_id: 'user-id',
      car_id: 'car-id',
      expected_return_date: dayAdd24h,
    });

    await expect(
      createRentalUseCase.execute({
        user_id: 'user-id',
        car_id: 'another-car-id',
        expected_return_date: dayAdd24h,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create a new rental if car is unavailable for rental', async () => {
    await createRentalUseCase.execute({
      user_id: 'user-id',
      car_id: 'car-id',
      expected_return_date: dayAdd24h,
    });

    await expect(
      createRentalUseCase.execute({
        user_id: 'another-user-id',
        car_id: 'car-id',
        expected_return_date: dayAdd24h,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create a new rental if return time is less than 24h', async () => {
    await expect(
      createRentalUseCase.execute({
        user_id: 'user-id',
        car_id: 'car-id',
        expected_return_date: dayjs().toDate(),
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
