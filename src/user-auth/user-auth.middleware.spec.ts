import { UserAuthMiddleware } from './user-auth.middleware';

describe('UserAuthMiddleware', () => {
  it('should be defined', () => {
    expect(new UserAuthMiddleware()).toBeDefined();
  });
});
