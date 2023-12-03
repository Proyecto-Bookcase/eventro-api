import { Injectable } from '@nestjs/common';
import { CreateAsistanceInput } from './dto/create-asistance.input';
import { UpdateAsistanceInput } from './dto/update-asistance.input';

@Injectable()
export class AsistanceService {
  create(createAsistanceInput: CreateAsistanceInput) {
    return 'This action adds a new asistance';
  }

  findAll() {
    return `This action returns all asistance`;
  }

  findOne(id: number) {
    return `This action returns a #${id} asistance`;
  }

  update(id: number, updateAsistanceInput: UpdateAsistanceInput) {
    return `This action updates a #${id} asistance`;
  }

  remove(id: number) {
    return `This action removes a #${id} asistance`;
  }
}
