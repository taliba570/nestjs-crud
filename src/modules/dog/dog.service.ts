import { Injectable } from '@nestjs/common';
import { Dog } from './interfaces/dog.interface';

@Injectable()
export class DogService {
  private readonly dogs: Dog[];

  async create(dog: Dog) {
    this.dogs.push(dog);
  }

  async findAll(): Promise<Dog[]> {
    return this.dogs;
  }
}
