import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';

describe('CatController', () => {
  let catController: CatController;
  let catService: CatService;

  beforeEach(() => {
    catService = new CatService();
    catController = new CatController(catService);
  });

  describe(`create`, () => {
    it(`should create a cat`, async () => {
      const input: CreateCatDto = {
        name: 'Coco',
        age: 2,
        breed: 'Persian Cat',
      };

      jest.spyOn(catService, 'create').mockImplementation(async () => input);

      expect(await catController.create(input)).toBe(input);
    });
  });

  describe(`create`, () => {
    it(`should create a cat`, async () => {
      const input: any = {
        name: 'Coco',
        breed: 'Persian Cat',
      };

      jest.spyOn(catService, 'create').mockImplementation(async () => input);
      console.log(input);
      expect(await catController.create(input)).toBe(input);
    });
  });

  describe(`findAll`, () => {
    it(`should return an array of cats`, async () => {
      const result: Cat[] = [
        {
          name: 'Coco',
          age: 2,
          breed: 'Persian Cat',
        },
        {
          name: 'ToTo',
          age: 12,
          breed: 'German Shepherd',
        },
      ];
      jest.spyOn(catService, 'findAll').mockImplementation(() => result);

      expect(await catController.findAll()).toBe(result);
    });
  });

  describe(`findAll`, () => {
    it(`should return an empty array of cats`, async () => {
      const result: Cat[] = [];
      jest.spyOn(catService, 'findAll').mockImplementation(() => result);

      expect(await catController.findAll()).toBe(result);
    });
  });

  describe(`findOne`, () => {
    it(`should return an object of Cat`, async () => {
      const result: Cat = {
        name: 'ToTo',
        age: 12,
        breed: 'German Shepherd',
      };

      jest.spyOn(catService, 'findOne').mockImplementation(() => result);

      expect(await catController.findOne('Toto')).toBe(result);
    });
  });

  describe(`findOne`, () => {
    it(`should return an empty object of Cat`, async () => {
      const db: Cat = {
        name: 'ToTo',
        age: 12,
        breed: 'German Shepherd',
      };

      const find = {
        name: 'ToTi',
        age: 12,
        breed: 'German Shepherd',
      };

      jest.spyOn(catService, 'findOne').mockImplementation(() => db);

      expect(await catController.findOne('Toto')).not.toEqual(find);
    });
  });
});
