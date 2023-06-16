import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CatService } from './cat.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
@ApiTags('Cat CRUD APIs')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post()
  async create(@Body() cat: CreateCatDto): Promise<Cat> {
    return this.catService.create(cat);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catService.findAll();
  }

  @Get(':name')
  async findOne(@Param('name') name: string): Promise<Cat> {
    return this.catService.findOne(name);
  }
}
