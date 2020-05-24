import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Crop } from './crop';
import { CropService } from './crop.service';

@Crud({
  model: {
    type: Crop,
  },
  routes: {
    only: ['getOneBase', 'createOneBase','updateOneBase', 'deleteOneBase'],
  },
})
@Controller('crop')
export class CropController {
  constructor(public service: CropService) {}
}
