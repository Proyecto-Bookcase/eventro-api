import { Injectable } from '@nestjs/common';
import { CreateInscriptionInput } from './dto/create-inscription.input';
import { UpdateInscriptionInput } from './dto/update-inscription.input';
import {PrismaClient} from "@prisma/client";
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class InscriptionService {

  constructor(private prisma: PrismaService) {}

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
