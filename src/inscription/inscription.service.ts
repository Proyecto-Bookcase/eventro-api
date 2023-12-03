import { Injectable } from '@nestjs/common';
import { CreateInscriptionInput } from './dto/create-inscription.input';
import { UpdateInscriptionInput } from './dto/update-inscription.input';

@Injectable()
export class InscriptionService {
  create(createInscriptionInput: CreateInscriptionInput) {
    return 'This action adds a new inscription';
  }

  findAll() {
    return `This action returns all inscription`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inscription`;
  }

  update(id: number, updateInscriptionInput: UpdateInscriptionInput) {
    return `This action updates a #${id} inscription`;
  }

  remove(id: number) {
    return `This action removes a #${id} inscription`;
  }
}
