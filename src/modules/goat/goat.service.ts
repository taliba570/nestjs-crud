import { Injectable } from '@nestjs/common';

@Injectable()
export class GoatService {
  findAll(): string {
    return 'All goats are returned';
  }
}
