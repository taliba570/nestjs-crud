import {
  All,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cats')
export class CatController {
  @Post()
  async create(@Body() createCatDto: CreateCatDto): Promise<string> {
    return `Cat is created ${createCatDto}`;
  }

  @Get()
  async findAll(@Req() req: Request): Promise<string> {
    console.log(req);
    return 'All cats are returned';
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<string> {
    return `Cat found with id # {${id}}`;
  }

  @Put(':id')
  async replace(
    @Param('id') id: string,
    @Body() updateCatDto: UpdateCatDto,
  ): Promise<string> {
    return `Whole cat data with # {${id}} is replaced with ${updateCatDto}`;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCatDto: UpdateCatDto,
  ): Promise<string> {
    return `Update given data of cat # {${id}} with data ${updateCatDto}`;
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<string> {
    return `Cat deleted with id # ${id}`;
  }

  @All()
  async invalidRequest(): Promise<string> {
    return 'Invalid request';
  }
}
