import { Body, Controller, Get, Post } from '@nestjs/common';
import { DogService } from './dog.service';
import { CreateDogDto } from './dto/create-dog.dto';
import { Dog } from './interfaces/dog.interface';

@Controller('dogs')
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @Post()
  async create(@Body() dog: CreateDogDto) {
    this.dogService.create(dog);
  }

  @Get()
  async findAll(): Promise<Dog[]> {
    return await this.dogService.findAll();
  }
}
