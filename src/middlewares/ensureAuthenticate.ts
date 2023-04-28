import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from '@errors/AppError';
import { UsersRepository } from '@modules/accounts/repositories/implementations/UsersRepository';

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token is missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(token, 'd652eeeea9a382e2b37ad73e0a66b131');

    const usersRepository = new UsersRepository();

    const userExists = usersRepository.findById(user_id as string);

    if (!userExists) {
      throw new AppError('User does not exists', 401);
    }

    request.user = {
      id: user_id as string,
    };

    next();
  } catch {
    throw new AppError('Invalid token', 401);
  }
}
