import { Controller, Get } from '@nestjs/common';

@Controller('goats')
export class GoatController {
  @Get()
  findAll(): string {
    return 'All goats are returned';
  }
}
