import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { UsersRepository } from '../modules/accounts/repositories/implementations/UsersRepository';

export async function ensureAuthenticate(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error('Token is missing');
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(token, 'd652eeeea9a382e2b37ad73e0a66b131');

    const usersRepository = new UsersRepository();

    const userExists = usersRepository.findById(user_id as string);

    if (!userExists) {
      throw new Error('User does not exists');
    }

    next();
  } catch {
    throw new Error('Invalid token');
  }
}