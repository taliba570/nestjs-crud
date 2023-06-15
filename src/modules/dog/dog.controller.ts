import { Controller, Get } from '@nestjs/common';

@Controller('dogs')
export class DogController {
  @Get()
  findAll(): string {
    return 'All dogs are returned';
  }
}
