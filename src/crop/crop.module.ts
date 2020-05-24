import { Module } from '@nestjs/common';
import { CropController } from './crop.controller';
import { CropService } from './crop.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Crop } from './crop';

@Module({
  imports: [TypeOrmModule.forFeature([Crop])],
  controllers: [CropController],
  providers: [CropService]
})
export class CropModule {}
