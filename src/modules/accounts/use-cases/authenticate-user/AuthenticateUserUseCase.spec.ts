import { AppError } from '@errors/AppError';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { UsersRepostoriesInMemory } from '@modules/accounts/repositories/in-memory/UsersRepositoryInMemory';
import { CreateUserUseCase } from '../create-user/CreateUserUseCase';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

let usersRepositoryInMemory: IUsersRepository;
let authenticateUserUseCase: AuthenticateUserUseCase;
let createUserUseCase: CreateUserUseCase;

describe('Authenticate User', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepostoriesInMemory();
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory,
    );
  });

  it('should be able to authenticate an user', async () => {
    const user = {
      name: 'John Doe',
      email: 'john@mail.com',
      password: '123456',
      driver_license: '123456',
    };

    await createUserUseCase.execute(user);

    const { token } = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(token).toBeTruthy();
  });

  it('should not be able to authenticate an invalid user', async () => {
    await expect(
      authenticateUserUseCase.execute({
        email: 'invalid@mail.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate an user with invalid password', async () => {
    const user = {
      name: 'John Doe',
      email: 'john@mail.com',
      password: '123456',
      driver_license: '123456',
    };

    await createUserUseCase.execute(user);

    await expect(
      authenticateUserUseCase.execute({
        email: user.email,
        password: 'invalid-password',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
