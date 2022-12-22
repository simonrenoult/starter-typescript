import { SayHelloService } from './say-hello.service';

describe('SayHelloService', () => {
  describe('sayHelloTo', () => {
    it('Dit bonjour à la personne passée en paramètre', () => {
      // Given
      const service = new SayHelloService();
      const someone = 'Simon';
      // When
      const result = service.sayHelloTo(someone);
      // Then
      expect(result).toEqual('Hello Simon');
    });
  });
});
