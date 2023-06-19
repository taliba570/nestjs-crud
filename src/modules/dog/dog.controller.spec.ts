import { Test } from '@nestjs/testing';
import { DogController } from './dog.controller';
import { DogService } from './dog.service';
import { Dog } from './interfaces/dog.interface';

describe('DogController', () => {
  let dogController: DogController;
  let dogService: DogService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [DogController],
      providers: [DogService],
    }).compile();
    dogService = await moduleRef.resolve(DogService);
    dogController = await moduleRef.resolve(DogController);
  });

  describe('findAll', () => {
    it(`should return an array of dogs`, async () => {
      const result: Dog[] = [];
      jest.spyOn(dogService, 'findAll').mockImplementation(async () => result);
      expect(await dogController.findAll()).toBe(result);
    });
  });
});
