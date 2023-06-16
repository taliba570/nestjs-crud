import { IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateCatDto {
  @ApiProperty({
    description: 'Cat Name',
    example: 'Coco',
  })
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({
    description: 'Cat Age',
    example: '2',
  })
  @IsInt()
  @Type(() => Number)
  @Min(0)
  @Max(20)
  @IsNotEmpty()
  readonly age: number;

  @ApiProperty({
    description: 'Cat Breed',
    example: 'Persian Cat',
  })
  @IsString()
  @IsNotEmpty()
  readonly breed: string;
}
