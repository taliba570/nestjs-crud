import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
@Injectable()
export class CatService {
  private readonly cats: Cat[] = [];

  async create(cat: Cat): Promise<Cat> {
    this.cats.push(cat);
    return cat;
  }

  findOne(name: string): Cat {
    return this.cats.find((obj) => obj.name === name);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
