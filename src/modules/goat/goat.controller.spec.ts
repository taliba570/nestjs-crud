import { Test } from '@nestjs/testing';
import { GoatController } from './goat.controller';
import { GoatService } from './goat.service';

describe(``, () => {
  let goatService: GoatService;
  let goatController: GoatController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [GoatController],
      providers: [GoatService],
    }).compile();
    goatService = await moduleRef.resolve(GoatService);
    goatController = await moduleRef.resolve(GoatController);
  });

  describe(`findAll`, () => {
    it(`should return all the goats list`, () => {
      const goat = 'All goats are returned';

      jest.spyOn(goatService, 'findAll').mockImplementation(() => goat);
      expect(goatController.findAll()).toBe(goat);
    });
  });
});
