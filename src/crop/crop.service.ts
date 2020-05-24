import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Crop } from './crop';

@Injectable()
export class CropService extends TypeOrmCrudService<Crop> {
  constructor(@InjectRepository(Crop) repo) {
    super(repo);
  }
}
