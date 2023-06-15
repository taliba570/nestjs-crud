import { Controller, Get } from '@nestjs/common';

@Controller('orca')
export class OrcaController {
  @Get()
  findAll(): string {
    return 'All orcas are returned';
  }
}
