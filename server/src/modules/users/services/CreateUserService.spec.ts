import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUser = new CreateUserService(fakeUsersRepository);

    const user = await createUser.execute({
      name: 'Leandro',
      email: 'leandro@rocketseat.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
    expect(user.name).toBe('Leandro');
  });

  it('should not be able to create a new user with same email another', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUser = new CreateUserService(fakeUsersRepository);

    await createUser.execute({
      name: 'Leandro',
      email: 'leandro@rocketseat.com',
      password: '123456',
    });

    expect(
      createUser.execute({
        name: 'Leandro',
        email: 'leandro@rocketseat.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
